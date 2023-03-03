import { parse } from '@babel/parser'
import { babelParserOptions } from '../constants.mjs'

export function getAST(htmlString) {
  return parse(htmlString, babelParserOptions)
}

export function htmlToJSXElement(htmlString) {
  const ast = getAST(htmlString, babelParserOptions)

  return ast.program.body[0].expression
}

const visitedComponents = {
}

export function visitedIndex(type) {
  if (!visitedComponents[type]) {
    visitedComponents[type] = 0
  }

  visitedComponents[type] += 1

  return visitedComponents[type]
}