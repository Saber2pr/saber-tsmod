/*
 * @Author: AK-12
 * @Date: 2019-01-12 17:23:40
 * @Last Modified by: AK-12
 * @Last Modified time: 2019-01-20 07:09:06
 */
import {
  path_core,
  path_src,
  path_test,
  tsmodJson
} from '../../config/path.config'
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
export async function createModuleFile(name: string) {
  const rename = Name.reset(name)

  const moduleFilePath = `${path_core}/${name}.ts`
  const moduleFileContent = module(name, rename).core
  if (Path.isExist(moduleFilePath)) {
    Fail.Task.createFail(name)
    return
  }
  // create module file
  await File.createFile(moduleFilePath, moduleFileContent)

  const moduleTest = `${path_test}/test_${rename}.ts`
  const moduleTestContent = module(name, rename).test
  // create module test file
  await File.createFile(moduleTest, moduleTestContent)

  // create test entry
  const test_entry = `${path_test}/test.ts`
  const module_test = `import { test_${rename} } from '../${
    tsmodJson.test
  }/test_${rename}'
test_${rename}()\n\n`

  if (!Path.isExist(test_entry)) {
    await File.createFile(test_entry, module_test)
  } else {
    await File.push(test_entry, module_test)
  }

  // create export
  const export_entry = `${path_src}/index.ts`
  const export_entry_content = `export * from './${tsmodJson.core}/${name}'\n`

  if (!Path.isExist(export_entry)) {
    await File.createFile(export_entry, export_entry_content)
  } else {
    await File.push(export_entry, export_entry_content)
  }

  Success.Task.createSuccessfully(moduleFilePath)
}
