import { htmlToJSXElement } from '../utils/ast.mjs'

import { getAttributes, jsxAttribute, stringifyAttributes, jsxSpreadAttribute } from '../utils/index.mjs'
import generate from "@babel/generator";
import { listSettingSchema } from "../schemas/index.mjs";
import { isValid, isValidArray } from "@nily/utils";
import { SETTINGS_SCHEMAS } from "./schemas.mjs";
import { allowedJSXElementTypes } from "../constants.mjs";
import { walk } from "../walk.mjs";
import { nodes_array_map } from "../constants.mjs";

export function List(element, parentSettingSchema) {
    const { openingElement } = element
    const elementName = openingElement.name.name

    if (openingElement.selfClosing) {
        throw new Error(`<${elementName} /> is not valid, use <${elementName} >...</${elementName}> instead`)
    }

    const attributes = getAttributes(openingElement)

    //const { name } = getSettingSchemaName('list', parentSettingSchema)
    let { path, propertyName: name } = nodes_array_map[[elementName, element.start].join('_')]
    let propertyName = name

    const settingSchema = listSettingSchema({
        name,
        title: attributes.for,
        propertyName: name
    })

    if (path.includes('.')) {
        propertyName = parentSettingSchema.propertyName + '.' + name
    } else {
        propertyName = 'data.setting.' + name
    }

    if (isValid(parentSettingSchema)) {
        parentSettingSchema.children.push(settingSchema)
    } else {
        SETTINGS_SCHEMAS.push(settingSchema)
    }

    const isHasJSXChildren = isValidArray(element.children) && element.children.some(n => allowedJSXElementTypes.includes(n.type))

    if (isHasJSXChildren) {
        element.children.forEach(n => walk(n, settingSchema))
    }

    const children = element.children.find(c => c.type === 'JSXElement')


    // children.openingElement.attributes = [
    //     ...children.openingElement.attributes.filter(a => a.type !== 'JSXSpreadAttribute'),
    //     jsxAttribute('key', `${name}.id`),
    //     jsxSpreadAttribute(name)
    // ]

    // console.log(
    //     generate.default(children).code
    // )

    children.openingElement.attributes.push(
        jsxAttribute('key', `${name}.id`)
    )

    const newElement = htmlToJSXElement(
        `<${elementName} ${stringifyAttributes(attributes, ['as', 'className'])}>
{${propertyName}?.map(${name} => (
    ${generate.default(children).code}
))}
</${elementName}>`
    )

    element.openingElement.attributes = newElement.openingElement.attributes
    element.children = newElement.children
}
