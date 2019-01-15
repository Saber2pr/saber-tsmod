/*
 * @Author: AK-12
 * @Date: 2019-01-12 17:23:40
 * @Last Modified by: AK-12
 * @Last Modified time: 2019-01-15 14:34:56
 */
import { path_core, path_root, path_test } from '../../config/path.config'
import { File, Path } from 'saber-node'
import { module } from '../template/module'
import { Fail, Success } from '../utils/print'
/**
 * createModuleFile
 *
 * @export
 * @param {string} name
 * @returns
 */
export async function createModuleFile(name: string) {
  const rename = name.replace(/-/g, '_')

  const moduleFilePath = `${path_core}/${name}.ts`
  const moduleFileContent = module(name, rename).core
  if (await Path.isExist(moduleFilePath)) {
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
  const module_test = `import { test_${rename} } from '../test/test_${rename}'
test_${rename}()\n\n`

  if (!(await Path.isExist(test_entry))) {
    await File.createFile(test_entry, module_test)
  } else {
    await File.push(test_entry, module_test)
  }

  // create export
  const export_entry = `${path_root}/index.ts`
  const export_entry_content = `export * from './core/${name}'\n`

  if (!(await Path.isExist(export_entry))) {
    await File.createFile(export_entry, export_entry_content)
  } else {
    await File.push(export_entry, export_entry_content)
  }

  Success.Task.createSuccessfully(moduleFilePath)
}
