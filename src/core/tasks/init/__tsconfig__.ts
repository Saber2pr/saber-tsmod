/*
 * @Author: AK-12
 * @Date: 2019-01-12 17:19:45
 * @Last Modified by: AK-12
 * @Last Modified time: 2019-01-15 13:36:30
 */
import { File } from 'saber-node'
import { reloadPackage } from '../../utils/reload'
import { Fail } from '../../utils/print'
import { Rule } from '../../utils/rule'
import { tsconfig } from '../../template/tsconfig'
import { path_tsconfig } from '../../../config/path.config'

export async function initTs_Config() {
  await File.createFile(path_tsconfig, tsconfig)

  await reloadPackage(packageData => {
    if (Rule.isUndefined(packageData.scripts.start)) {
      packageData.scripts.start = 'tsc --watch'
    } else {
      Fail.Package.Existed.script('start')
    }
    if (Rule.isUndefined(packageData.devDependencies.typescript)) {
      packageData.devDependencies.typescript = '^3.2.1'
    } else {
      Fail.Package.Existed.devDependencie('typescript')
    }
    return packageData
  })

  return
}
