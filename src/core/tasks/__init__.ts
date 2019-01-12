/*
 * @Author: AK-12
 * @Date: 2019-01-12 17:02:13
 * @Last Modified by: AK-12
 * @Last Modified time: 2019-01-12 17:24:16
 */
import { Terminal } from 'saber-node'
import { initPackageJson } from './init/__package__'
import { initHtml } from './init/__html__'
import { initReadMe } from './init/__readme__'
import { initTsConfig } from './init/__tsconfig__'
import { initWebpackConfig } from './init/__webpackConfig__'
/**
 * init
 *
 * @export
 */
export async function init() {
  // Terminal res
  const name = await Terminal.getUserInput('Package name: ')
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
  await initPackageJson(packageInfor)
  await initHtml(packageInfor)
  await initReadMe(packageInfor)
  await initTsConfig()
  await initWebpackConfig()

  return
}
