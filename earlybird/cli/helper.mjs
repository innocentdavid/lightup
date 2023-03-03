import { basename } from 'path'

export const toCamelCase = (string) => {
  return string.replace(/^([A-Z])|[\s-_]+(\w)/g, (_, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase())
}

export const toPascalCase = (string) => {
  const camelCase = toCamelCase(string)

  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1)
}

export const toSnakeCase = (string) => {
  return string.replace(/\.?([A-Z]+)/g, (_, p1) => "_" + p1.toLowerCase()).replace(/^_/, "")
}

export const fileName = (filePath, ext) => {
  return basename(filePath).replace(ext, '')
}
