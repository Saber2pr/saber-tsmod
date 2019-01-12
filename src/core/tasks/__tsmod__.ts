/*
 * @Author: AK-12
 * @Date: 2019-01-12 17:23:40
 * @Last Modified by:   AK-12
 * @Last Modified time: 2019-01-12 17:23:40
 */
import { core, root, test } from '../../config/path.config'
import { File, Path } from 'saber-node'
/**
 * createModuleFile
 *
 * @export
 * @param {string} name
 * @returns
 */
export async function createModuleFile(name: string) {
  const rename = name.replace(/-/, '_')

  const moduleFilePath = `${core}/${name}.ts`
  const moduleFileContent = `export let ${rename} = '${name}'`
  // create module file
  await File.createFile(moduleFilePath, moduleFileContent)

  const moduleTest = `${test}/test_${rename}.ts`
  const moduleTestContent = `import { ${rename} } from '../core/${name}'\nexport function test_${rename}(){console.log(${rename})}`
  // create module test file
  await File.createFile(moduleTest, moduleTestContent)

  // create test entry
  const test_entry = `${test}/test.ts`
  const module_test = `import { test_${rename} } from '../test/test_${rename}' \ntest_${rename}()\n`
  if (!(await Path.isExist(test_entry))) {
    await File.createFile(test_entry, module_test)
  } else {
    await File.pushFile(test_entry, module_test)
  }
  // create export
  const export_entry = `${root}/index.ts`
  if (!(await Path.isExist(export_entry))) {
    const export_entry_content = `export * from './core/${name}'`
    await File.createFile(export_entry, export_entry_content)
  }

  return moduleFilePath
}
