import { Text } from "./workers/index.mjs";
import { Heading } from "./workers/heading.mjs";
import { Html } from "./workers/html.mjs";
import { Media } from "./workers/media.mjs";
import { Image } from "./workers/image.mjs";
import { Video } from "./workers/video.mjs";
import { Link } from "./workers/link.mjs";
import { Icon } from "./workers/icon.mjs";
import { Group } from "./workers/group.mjs";
import { List } from "./workers/list.mjs";
import { isValidArray } from "@nily/utils";
import { allowedComponentNames, allowedJSXElementTypes, nodes_array, nodes_array_map } from "./constants.mjs";

export function walk(element, opts) {
    if (allowedJSXElementTypes.includes(element.type)) {
        const { openingElement } = element
        const elementName = openingElement.name.name

        switch (elementName) {
            case 'Text':
                Text(element, opts)
                break

            case 'H1':
            case 'H2':
            case 'H3':
            case 'H4':
            case 'H5':
            case 'H6':
                Heading(element, opts)
                break

            case 'Html':
                Html(element, opts)
                break

            case 'Image':
                Image(element, opts)
                break

            case 'Video':
                Video(element, opts)
                break

            case 'Media':
                Media(element, opts)
                break

            case 'Link':
                Link(element, opts)
                break

            case 'Icon':
                Icon(element, opts)
                break

            case 'Group':
                Group(element, opts)
                break

            case 'List':
                List(element, opts)
                break

            default:
                if (isValidArray(element.children)) {
                    element.children.forEach(node => walk(node, opts))
                }
                break
        }
    }
}

export function walk0(element, opts, indexed) {
    if (allowedJSXElementTypes.includes(element.type)) {
        const { openingElement } = element
        const elementName = openingElement.name.name

        if (!indexed[elementName]) {
            indexed[elementName] = 0
        }

        indexed[elementName] += 1

        const propertyName = elementName + indexed[elementName]

        const n = {
            elementName,
            start: element.start,
            path: opts ? [opts.path, propertyName].join('.') : propertyName
        }

        if (allowedJSXElementTypes.includes(element.type)) {
            nodes_array_map[`${n.elementName}_${n.start}`] = {
                path: n.path,
                propertyName
            }
        }

        switch (elementName) {
            case 'Text':
            case 'H1':
            case 'H2':
            case 'H3':
            case 'H4':
            case 'H5':
            case 'H6':
            case 'Html':
            case 'Image':
            case 'Video':
            case 'Media':
            case 'Icon':
                opts ? opts.children.push(n) : nodes_array.push(n)
                break

            case 'Link':
            case 'Group':
                if (element.children) {
                    n.children = []
                    const tmpIndexed = {}

                    element.children.forEach(node => {
                        walk0(node, n, tmpIndexed)
                    })
                }
                opts ? opts.children.push(n) : nodes_array.push(n)
                break

            case 'List':
                if (element.children) {
                    n.children = []
                    const children = element.children.filter(c => allowedJSXElementTypes.includes(c.type))

                    if (!allowedComponentNames.includes(children[0].openingElement.name.name)) {
                        throw new Error(`Only allow ${allowedComponentNames.join(', ')} components as children in List component`)
                    }

                    children.forEach(node => {
                        walk0(node, n, {})
                    })
                }
                opts ? opts.children.push(n) : nodes_array.push(n)
                break

            default:
                if (isValidArray(element.children)) {
                    element.children.forEach(node => {
                        walk0(node, opts, indexed)
                    })
                }
                break
        }
    }
}
