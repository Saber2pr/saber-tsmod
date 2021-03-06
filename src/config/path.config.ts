import { Terminal } from 'saber-node'

/*
 * @Author: AK-12
 * @Date: 2019-01-11 22:20:22
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-02-04 14:40:16
 */
let ROOT
if (process.argv[2] === '_test') {
  ROOT = `${process.cwd()}/__test__`
  Terminal.Print.error('**** TEST MODE ****')
} else {
  ROOT = process.cwd()
}
export const path_root = `${ROOT}/src`
export const path_core = `${path_root}/core`
export const path_test = `${path_root}/test`
// file path
export const path_packageJson = `${ROOT}/package.json`
export const path_html = `${ROOT}/index.html`
export const path_gitignore = `${ROOT}/.gitignore`
export const path_npmignore = `${ROOT}/.npmignore`
export const path_readme = `${ROOT}/README.md`
export const path_tsconfig = `${ROOT}/tsconfig.json`
export const path_webpackConfig = `${ROOT}/webpack.config.js`
export const path_tsmod = `${ROOT}/tsmod.json`
export const path_rollupConfig = `${ROOT}/rollup.config.js`
