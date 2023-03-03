import { isEmpty, isBoolean, isNumber, isArray } from '@nily/utils'
import t from '@babel/types'

/**
 *
 * @param {JSXOpeningElement} element
 */
export function getAttributes(element) {
  return element.attributes.reduce((prev, curr) => {
    if (!curr.value) {
      return prev
    }

    let value

    switch (curr.value.type) {
      case 'StringLiteral':
        value = curr.value.value
        break

      case 'JSXExpressionContainer':
        value = curr.value.expression.value
        break
    }

    return {
      ...prev,
      [curr.name.name]: value
    }
  }, {})
}

export function stringifyAttributes(attributes, keys) {
  const arr = []

  for (const key of keys) {
    const value = attributes[key]

    if (isEmpty(value)) {
      continue
    }

    if (isBoolean(value) || isNumber(value)) {
      arr.push(`${key}={${value}}`)
    } else {
      arr.push(`${key}="${value.toString()}"`)
    }
  }

  return arr.join(' ')
}

export function jsxAttribute(key, value) {
  let attrValue

  if (isBoolean(value)) {
    attrValue = t.jsxExpressionContainer(t.booleanLiteral(value))
  } else if (isNumber(value)) {
    attrValue = t.jsxExpressionContainer(t.numericLiteral(value))
  } else {
    if (value.includes('.')) {
      attrValue = t.jsxExpressionContainer(memberExpression(value))
    } else {
      attrValue = t.stringLiteral(value)
    }
  }

  return t.jsxAttribute(t.jSXIdentifier(key), attrValue)
}

export function jsxAttributes(attributes, keys) {
  const attrs = []
  const $keys = keys || Object.keys(attributes)

  for (const key of $keys) {
    const value = attributes[key]

    if (isEmpty(value)) {
      continue
    }

    attrs.push(
      jsxAttribute(key, value)
    )
  }

  return attrs
}

function expressionFactory(property, parentExpression) {
  if (parentExpression) {
    return t.memberExpression(parentExpression, t.identifier(property))
  } else {
    return t.identifier(property)
  }
}

export function memberExpression(propertyString) {
  return propertyString.split('.').reduce((prev, curr) => expressionFactory(curr, prev), undefined)
}

export function jsxSpreadAttribute(propertyString) {
  return t.jsxSpreadAttribute(
    memberExpression(propertyString)
  )
}

export function jsxExpressionAttribute(name, propertyString) {
  return t.jsxAttribute(t.jsxIdentifier(name), t.jsxExpressionContainer(memberExpression(propertyString)))
}

const settingSchemaIndexes = {
}

export function getSettingSchemaName(type, parentSettingSchema) {
  return {
    name: type
  }
}
