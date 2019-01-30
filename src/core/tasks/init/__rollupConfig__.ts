/*
 * @Author: AK-12
 * @Date: 2019-01-26 19:37:42
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-01-30 19:19:28
 */
import { createf } from '../../utils/createf'
import { path_rollupConfig } from '../../../config/path.config'
import { rollupConfig } from '../../template/rollup'
import { reloadPackage } from '../../utils/reload'
import { Rule } from '../../utils/rule'
import { Fail } from '../../utils/print'

export async function init_rollupConfig() {
  await createf(path_rollupConfig, rollupConfig)

  try {
    await reloadPackage(packageData => {
      if (Rule.isUndefined(packageData.scripts.dev)) {
        packageData.scripts.dev = 'rollup -c --watch'
        if (Rule.isUndefined(packageData.devDependencies.rollup)) {
          packageData.devDependencies.rollup = '^1.1.2'
          packageData.devDependencies['rollup-plugin-commonjs'] = '^9.2.0'
          packageData.devDependencies['rollup-plugin-node-resolve'] = '^4.0.0'
        } else {
          Fail.Package.Existed.devDependencie('rollup')
        }
      } else {
        Fail.Package.Existed.script('dev')
      }
      return packageData
    })
  } catch (error) {
    console.log((<Error>error).message)
  }

  return
}
