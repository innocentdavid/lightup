import sanitizeHtml from 'sanitize-html'
import generate from '@babel/generator'
import { htmlToJSXElement } from '../utils/ast.mjs'

import { getAttributes, getSettingSchemaName, stringifyAttributes } from '../utils/index.mjs'
import { isValid } from "@nily/utils";
import { SETTINGS_SCHEMAS } from "./schemas.mjs";
import { htmlSettingSchema } from "../schemas/index.mjs";
import { nodes_array_map } from "../constants.mjs";

export function Heading(element, parentSettingSchema) {
    const { openingElement } = element
    const elementName = openingElement.name.name

    if (openingElement.selfClosing) {
        throw new Error(`<${elementName} /> is not valid, use <${elementName} >...</${elementName}> instead`)
    }

    const attributes = getAttributes(openingElement)
    const html = sanitizeHtml(generate.default(element).code, {
        allowedTags: ['b', 'i', 'em', 'strong', 'a'],
        allowedAttributes: {
            'a': ['href'],
            '*': ['style']
        }
    })

    //const { name } = getSettingSchemaName('heading', parentSettingSchema)
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
            as: elementName.toLowerCase(),
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
        `<${elementName} ${stringifyAttributes(attributes, ['className'])} {...${propertyName}} />`
    )

    element.openingElement.attributes = newElement.openingElement.attributes
    element.openingElement.selfClosing = newElement.openingElement.selfClosing
    element.children = newElement.children
}
