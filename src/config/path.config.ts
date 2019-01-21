/*
 * @Author: AK-12
 * @Date: 2019-01-11 22:20:22
 * @Last Modified by: AK-12
 * @Last Modified time: 2019-01-21 06:58:13
 */
import { Terminal, File, Path } from 'saber-node'

let ROOT
if (process.argv[2] === '_test') {
  ROOT = `${process.cwd()}/__test__`
  Terminal.Print.error('**** TEST MODE ****')
} else {
  ROOT = process.cwd()
}

interface tsmod {
  core: string
  test: string
}
export const path_tsmodJson = `${ROOT}/tsmod.json`
export const tsmodJson: tsmod = Path.isExist(path_tsmodJson)
  ? File.Json.read(path_tsmodJson)
  : { core: 'core', test: 'test' }

export const path_src = `${ROOT}/src`
export const path_core = `${path_src}/${tsmodJson.core}`
export const path_test = `${path_src}/${tsmodJson.test}`
// file path
export const path_packageJson = `${ROOT}/package.json`
export const path_html = `${ROOT}/index.html`
export const path_gitignore = `${ROOT}/.gitignore`
export const path_readme = `${ROOT}/README.md`
export const path_tsconfig = `${ROOT}/tsconfig.json`
export const path_webpackConfig = `${ROOT}/webpack.config.js`
