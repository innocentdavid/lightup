import { htmlToJSXElement } from '../utils/ast.mjs'

import { getAttributes, getSettingSchemaName, stringifyAttributes } from '../utils/index.mjs'
import { imageSettingSchema } from "../schemas/index.mjs";
import { isValid } from "@nily/utils";
import { SETTINGS_SCHEMAS } from "./schemas.mjs";
import { nodes_array_map } from "../constants.mjs";

export function Image(element, parentSettingSchema) {
    const { openingElement } = element
    const elementName = openingElement.name.name

    if (!openingElement.selfClosing) {
        throw new Error(`<${elementName} >...</${elementName}> is not valid, use <${elementName} /> instead`)
    }

    const attributes = getAttributes(openingElement)

    //const { name } = getSettingSchemaName('image', parentSettingSchema)
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
    const settingSchema = imageSettingSchema({
        name,
        title: attributes.for,
        default: {
            src: attributes.src,
            alt: attributes.alt,
            width: attributes.width,
            height: attributes.height,
            quality: attributes.quality,
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
