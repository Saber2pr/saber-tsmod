/*
 * @Author: AK-12
 * @Date: 2019-01-12 17:02:13
 * @Last Modified by: AK-12
 * @Last Modified time: 2019-01-26 20:48:38
 */
import { Terminal } from 'saber-node'
import { init_PackageJson } from './init/__package__'
import { init_Html } from './init/__html__'
import { init_ReadMe } from './init/__readme__'
import { init_Tsconfig } from './init/__tsconfig__'
import { init_WebpackConfig } from './init/__webpackConfig__'
import { init_gitignore } from './init/__gitignore__'
import { Fail } from '../utils/print'
import { init_rollupConfig } from './init/__rollupConfig__'
import { TerminalLog } from '../view/terminal-view'
/**
 * @interface IPackageInfor
 */
export interface IPackageInfor {
  name: string
  description: string
  repository: string
  author: string
  scripts?: {
    start: 'tsc --watch'
    dev: 'webpack --watch' | 'rollup -c --watch'
  }
  devDependencies?: {
    typescript: '^3.2.1'
    webpack: '^3.12.0'
    rollup: '^1.1.2'
    'rollup-plugin-commonjs': '^9.2.0'
    'rollup-plugin-node-resolve': '^4.0.0'
  }
}
/**
 * init
 *
 * @export
 */
export async function init() {
  // Terminal res
  const name = await Terminal.getUserInput('Package name: ')
  if (!name) {
    Fail.Task.initFail('<Package name> cannot be null!')
    return
  }
  const description = await Terminal.getUserInput('description: ')
  const repository = await Terminal.getUserInput('repository(git): ')
  const author = await Terminal.getUserInput('author: ')

  let packageInfor = {
    name: name,
    description: description,
    repository: repository,
    author: author
  }
  // resolve
  await init_PackageJson(packageInfor)
  await init_ReadMe(packageInfor)
  await init_Tsconfig()

  const Init_Options = await Terminal.getUserInput(TerminalLog.Select.config)
  if (Init_Options === '1') {
    await init_Html(packageInfor)
    await init_WebpackConfig()
  } else if (Init_Options === '2') {
    await init_Html(packageInfor)
    await init_rollupConfig()
  }

  await init_gitignore()

  return
}
