/*
 * @Author: AK-12
 * @Date: 2019-01-12 17:19:45
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-01-30 19:20:34
 */
import { reloadPackage } from '../../utils/reload'
import { Fail } from '../../utils/print'
import { Rule } from '../../utils/rule'
import { tsconfig } from '../../template/tsconfig'
import { path_tsconfig } from '../../../config/path.config'
import { createf } from '../../utils/createf'

export async function init_Tsconfig() {
  await createf(path_tsconfig, tsconfig)

  try {
    await reloadPackage(packageData => {
      if (Rule.isUndefined(packageData.scripts.start)) {
        packageData.scripts.start = 'tsc --watch'
        if (Rule.isUndefined(packageData.devDependencies.typescript)) {
          packageData.devDependencies.typescript = '^3.4.3'
        } else {
          Fail.Package.Existed.devDependencie('typescript')
        }
      } else {
        Fail.Package.Existed.script('start')
      }
      return packageData
    })
  } catch (error) {
    console.log((<Error>error).message)
  }

  return
}
