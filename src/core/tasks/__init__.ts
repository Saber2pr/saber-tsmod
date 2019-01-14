/*
 * @Author: AK-12
 * @Date: 2019-01-12 17:02:13
 * @Last Modified by: AK-12
 * @Last Modified time: 2019-01-14 22:27:19
 */
import { Terminal } from 'saber-node'
import { init_PackageJson } from './init/__package__'
import { init_Html } from './init/__html__'
import { init_ReadMe } from './init/__readme__'
import { initTs_Config } from './init/__tsconfig__'
import { init_WebpackConfig } from './init/__webpackConfig__'
import { init_gitignore } from './init/__gitignore__'
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
    dev: 'webpack --watch'
  }
  devDependencies?: {
    typescript: '^3.2.1'
    webpack: '^3.12.0'
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
    Terminal.Print.error('--- init failed ---')
    Terminal.Print.error('<Package name> cannot be null!')
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
  await initTs_Config()

  const isInit_webpack = await Terminal.getUserInput('config webpack?(y/n): ')
  if (isInit_webpack === 'y') {
    await init_Html(packageInfor)
    await init_WebpackConfig()
  }

  await init_gitignore()

  Terminal.Print.success('--- init successfully ---')
  return
}
