import sanitizeHtml from 'sanitize-html'
import generate from '@babel/generator'
import { htmlToJSXElement } from '../utils/ast.mjs'

import { getAttributes, getSettingSchemaName, stringifyAttributes } from '../utils/index.mjs'
import { htmlSettingSchema } from "../schemas/index.mjs";
import { isValid } from "@nily/utils";
import { SETTINGS_SCHEMAS } from "./schemas.mjs";
import { nodes_array_map } from "../constants.mjs";

export function Html(element, parentSettingSchema) {
    const { openingElement } = element
    const elementName = openingElement.name.name

    if (openingElement.selfClosing) {
        throw new Error(`<${elementName} /> is not valid, use <${elementName} >...</${elementName}> instead`)
    }

    const attributes = getAttributes(openingElement)
    const html = sanitizeHtml(generate.default(element).code, {
        allowedAttributes: {
            'a': ['href'],
            '*': ['style']
        }
    }).replaceAll('{" "}', ' ')

    //const { name } = getSettingSchemaName('html', parentSettingSchema)
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

    const settingSchema = htmlSettingSchema({
        name,
        title: attributes.for,
        default: {
            as: attributes.as,
            html,
            style: {
                color: attributes.color
            },
        },
    })

    if (isValid(parentSettingSchema)) {
        parentSettingSchema.children.push(settingSchema)
    } else {
        SETTINGS_SCHEMAS.push(settingSchema)
    }

    const newElement = htmlToJSXElement(
        `<${elementName} ${stringifyAttributes(attributes, ['as', 'className'])} {...${propertyName}} />`
    )

    element.openingElement.attributes = newElement.openingElement.attributes
    element.openingElement.selfClosing = newElement.openingElement.selfClosing
    element.children = newElement.children
}
