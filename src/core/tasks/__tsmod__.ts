/*
 * @Author: AK-12
 * @Date: 2019-01-12 17:23:40
 * @Last Modified by: AK-12
 * @Last Modified time: 2019-01-26 15:51:23
 */
import { path_core, path_root, path_test } from '../../config/path.config'
import { File, Path } from 'saber-node'
import { module } from '../template/module'
import { Fail, Success } from '../utils/print'
import { Name } from '../utils/rule'
/**
 * createModuleFile
 *
 * @export
 * @param {string} name
 * @returns
 */
export async function createModuleFile($name: string) {
  const rename = Name.reset($name)
  const resolv = Path.split($name)
  let name = resolv.str
  let type = resolv.type
  if (!Name.pass(type)) {
    name = type
    type = Name.passtype(resolv.type)
  }
  const moduleFilePath = `${path_core}/${name}.${type}`
  const moduleFileContent = module(name, rename).core
  if (Path.isExist(moduleFilePath)) {
    Fail.Task.createFail(name)
    return
  }
  // create module file
  await File.createFile(moduleFilePath, moduleFileContent)

  const moduleTest = `${path_test}/${name}.${type}`
  const moduleTestContent = module(name, rename).test
  // create module test file
  await File.createFile(moduleTest, moduleTestContent)

  // create test entry
  const test_entry = `${path_test}/test.${type}`
  const module_test = `import { test_${rename} } from './${name}'
test_${rename}()\n\n`

  if (!Path.isExist(test_entry)) {
    await File.createFile(test_entry, module_test)
  } else {
    await File.push(test_entry, module_test)
  }

  // create export
  const export_entry = `${path_root}/index.${type}`
  const export_entry_content = `export * from './core/${name}'\n`

  if (!Path.isExist(export_entry)) {
    await File.createFile(export_entry, export_entry_content)
  } else {
    await File.push(export_entry, export_entry_content)
  }

  Success.Task.createSuccessfully(moduleFilePath)
}
