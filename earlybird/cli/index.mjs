import { getAST } from './utils/ast.mjs'
import { walk, walk0 } from "./walk.mjs";
import { replaceImportSpecifiers } from "./workers/import.mjs";
import generate from "@babel/generator";
import { SETTINGS_SCHEMAS } from "./workers/schemas.mjs";
import t from '@babel/types'
import { toPascalCase, toSnakeCase } from './helper.mjs';

export function build(componentContent, filename) {
    const ast = getAST(componentContent)

    replaceImportSpecifiers(ast.program.body)
    //
    // Traverse the default function declaration and generate EalyBird Setting Schemas
    const defaultFunctionNode = ast.program.body.find(n => n.type === 'ExportDefaultDeclaration')

    // Only default export is allowed
    if (!defaultFunctionNode) {
        throw new Error(`Only default export component is allowed, eg: "export default function () { ... }"`)
    }

    const returnStatementNodes = defaultFunctionNode.declaration.body.body.filter(n => n.type === 'ReturnStatement')

    if (returnStatementNodes.length > 1) {
        throw new Error('Only one return statement is allowed')
    }

    const returnStatementNode = returnStatementNodes[0]
    const allowedJSXTypes = ['JSXElement', 'JSXFragment']

    if (!allowedJSXTypes.includes(returnStatementNode?.argument?.type)) {
        throw new Error('Component should be returning a JSX.Element')
    }

    const jsxElement = returnStatementNode.argument

    walk0(jsxElement, undefined, {})
    walk(jsxElement)

    ast.program.body = [
        ...ast.program.body.filter(n => n.type !== 'ExportDefaultDeclaration'),

        // Replace `export default function ()` to `const render = function ({ data })`
        t.variableDeclaration('const', [
            t.variableDeclarator(
                t.identifier('render'),
                t.functionExpression(null, [t.objectPattern([t.objectProperty(t.identifier('data'), t.identifier('data'), false, true)])], defaultFunctionNode.declaration.body)
            )
        ])
    ]

    const _json = JSON.stringify(SETTINGS_SCHEMAS, null, 2)
    const code =
        `${generate.default(ast).code}

const settingSchemas = ${_json};

export const ${toPascalCase(filename)} = {
    type: "${toSnakeCase(filename)}",
    settingSchemas,
    render
}
`

    SETTINGS_SCHEMAS.splice(0, SETTINGS_SCHEMAS.length)

    return { code, json: JSON.parse(_json) }
}
