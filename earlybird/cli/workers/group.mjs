import { htmlToJSXElement } from '../utils/ast.mjs'

import { getAttributes, getSettingSchemaName, stringifyAttributes } from '../utils/index.mjs'
import { isValid, isValidArray } from "@nily/utils";
import { walk } from "../walk.mjs";
import { nodes_array_map } from "../constants.mjs";
import { groupSettingSchema } from "../schemas/index.mjs";
import { SETTINGS_SCHEMAS } from "./schemas.mjs";
import generate from "@babel/generator";

export function Group(element, parentSettingSchema) {
    const { openingElement } = element
    const elementName = openingElement.name.name

    if (openingElement.selfClosing) {
        throw new Error(`<${elementName} /> is not valid, use <${elementName} >...</${elementName}> instead`)
    }

    const attributes = getAttributes(openingElement)

    //const { name } = getSettingSchemaName('group', parentSettingSchema)
    let { path, propertyName: name } = nodes_array_map[[elementName, element.start].join('_')]
    let propertyName = name

    if (path.includes('.')) {
        propertyName = parentSettingSchema.propertyName + '.' + name
    } else {
        propertyName = 'data.setting.' + name
    }

    //  if (parentSettingSchema?.type === 'schema_list') {
    //       name = undefined
    //   }
    const settingSchema = groupSettingSchema({
        name,
        title: attributes.for,
        propertyName
    })

    if (isValid(parentSettingSchema)) {
        parentSettingSchema.children.push(settingSchema)
    } else {
        SETTINGS_SCHEMAS.push(settingSchema)
    }

    element.children.forEach(n => walk(n, settingSchema))

    const newElement = htmlToJSXElement(
        `<${elementName} ${stringifyAttributes(attributes, ['as', 'className'])}>
    ${element.children.map(c => generate.default(c).code.replaceAll(`...${name}`, `...${propertyName}`)).join('\n')}
</${elementName}>`
    )

    element.openingElement.attributes = newElement.openingElement.attributes
    element.children = newElement.children
}
