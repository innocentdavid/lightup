import t from '@babel/types'
import { isValid } from "@nily/utils";

/**
 * Replace import specifiers of EarlyBird components
 *
 * eg: `Text` -> `$Text as Text`
 */
export function replaceImportSpecifiers(body) {
    const node = body.find(node => node.type === 'ImportDeclaration' && node.source.value === '@earlybird/blocks')

    if (node && isValid(node.specifiers)) {
        node.specifiers = node.specifiers.map(s => {
            return (
                t.importSpecifier(t.identifier(s.local.name), t.identifier(`$${s.imported.name}`))
            )
        })
    }
}
