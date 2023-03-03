import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'
import fsExtra from 'fs-extra'
import { readdirSync, readFileSync, writeFileSync } from 'fs'
import { build } from '../earlybird/cli/index.mjs'
import { fileName } from '../earlybird/cli/helper.mjs'
import { getBlockSetting } from '../earlybird/settingSchema.mjs'

const HOME_DIR = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const SRC_DIR = resolve(HOME_DIR, 'src')
const COMPONENTS_DIR = resolve(SRC_DIR, 'components')
const BUILD_DIR = resolve(HOME_DIR, 'build')

async function main() {
  console.log('🚀 Building...')

  const exists = fsExtra.pathExistsSync(COMPONENTS_DIR)

  if (!exists) {
    console.error(`💢 Error: directory src/components is not exists`)
    process.exit(1)
  }

  // Create build folder if not exists
  fsExtra.ensureDirSync(BUILD_DIR)

  const componentFiles = readdirSync(COMPONENTS_DIR)

  for (const componentFile of componentFiles) {
    console.log('⏰ Transforming: %s', componentFile)

    const componentContent = readFileSync(resolve(COMPONENTS_DIR, componentFile)).toString('utf-8')
    const filename = fileName(componentFile, '.jsx')
    const { code, json } = build(componentContent, filename)

    writeFileSync(
      resolve(BUILD_DIR, `${filename}.jsx`),
      code
    )

    writeFileSync(
      resolve(BUILD_DIR, `${filename}.json`),
      JSON.stringify(getBlockSetting(json), null, 2)
    )
  }
}

main()
