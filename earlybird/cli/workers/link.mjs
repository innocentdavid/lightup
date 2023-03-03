import { htmlToJSXElement } from '../utils/ast.mjs'

import { getAttributes, getSettingSchemaName, stringifyAttributes } from '../utils/index.mjs'
import sanitizeHtml from "sanitize-html";
import generate from "@babel/generator";
import { linkSettingSchema } from "../schemas/index.mjs";
import { isValid, isValidArray } from "@nily/utils";
import { SETTINGS_SCHEMAS } from "./schemas.mjs";
import { allowedJSXElementTypes } from "../constants.mjs";
import { walk } from "../walk.mjs";
import { nodes_array_map } from "../constants.mjs";

export function Link(element, parentSettingSchema) {
    const { openingElement } = element
    const elementName = openingElement.name.name

    if (openingElement.selfClosing) {
        throw new Error(`<${elementName} /> is not valid, use <${elementName} >...</${elementName}> instead`)
    }

    const attributes = getAttributes(openingElement)

    const isHasJSXChildren = isValidArray(element.children) && element.children.some(n => allowedJSXElementTypes.includes(n.type))

    let { path, propertyName: name } = nodes_array_map[[elementName, element.start].join('_')]
    let propertyName = name

    if (path.includes('.')) {
        propertyName = parentSettingSchema.propertyName + '.' + name
    } else {
        propertyName = 'data.setting.' + name
    }

    const settingSchema = linkSettingSchema({
        name,
        title: attributes.for,
        default: {
            title: attributes.title,
            href: attributes.href,
            appearance: attributes.appearance,
            isInNewTab: attributes.isInNewTab,
            style: {
                color: attributes.color,
                background: attributes.background
            }
        },
        propertyName
    })

    if (isValid(parentSettingSchema)) {
        parentSettingSchema.children.push(settingSchema)
    } else {
        SETTINGS_SCHEMAS.push(settingSchema)
    }

    if (isHasJSXChildren) {
        element.children.forEach(n => walk(n, settingSchema))
    }

    const newElement = htmlToJSXElement(
        `<${elementName} ${stringifyAttributes(attributes, ['className'])} {...${propertyName}}>
    ${element.children.map(c => generate.default(c).code).join('\n')}
</${elementName}>`
    )

    element.openingElement.attributes = newElement.openingElement.attributes
    element.children = newElement.children
}
