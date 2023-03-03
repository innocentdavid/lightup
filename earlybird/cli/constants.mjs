export const allowedComponentNames = [
    'Text', 'Html', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6',
    'Image', 'Video', 'Media',
    'Icon',
    'Link',
    'Group',
    'List'
]

export const babelParserOptions = {
    sourceType: 'module',
    allowImportExportEverywhere: false,
    allowAwaitOutsideFunction: false,
    allowReturnOutsideFunction: false,
    plugins: ['jsx', 'flow']
}

export const allowedJSXElementTypes = ['JSXElement', 'JSXFragment']

export const nodes_array = []
export const nodes_array_map = {}
