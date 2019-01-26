/*
 * @Author: AK-12
 * @Date: 2019-01-12 17:19:45
 * @Last Modified by: AK-12
 * @Last Modified time: 2019-01-26 20:52:43
 */
import { reloadPackage } from '../../utils/reload'
import { Fail } from '../../utils/print'
import { Rule } from '../../utils/rule'
import { tsconfig } from '../../template/tsconfig'
import { path_tsconfig } from '../../../config/path.config'
import { createf } from '../../utils/createf'

export async function init_Tsconfig() {
  await createf(path_tsconfig, tsconfig)

  await reloadPackage(packageData => {
    if (Rule.isUndefined(packageData.scripts.start)) {
      packageData.scripts.start = 'tsc --watch'
      if (Rule.isUndefined(packageData.devDependencies.typescript)) {
        packageData.devDependencies.typescript = '^3.2.1'
      } else {
        Fail.Package.Existed.devDependencie('typescript')
      }
    } else {
      Fail.Package.Existed.script('start')
    }
    return packageData
  })
  return
}
