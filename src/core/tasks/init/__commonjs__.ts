/*
 * @Last Modified by: AK-12
 * @Last Modified time: 2019-01-18 09:57:20
 * @Last Modified by: AK-12
 * @Last Modified time: 2019-01-18 10:08:26
 */
import { path_commonjs } from '../../../config/path.config'
import { Path, File } from 'saber-node'
import { Fail, Success } from '../../utils/print'
import { reloadPackage } from '../../utils/reload'
import { Rule } from '../../utils/rule'
import { commonjs } from '../../template/commonjs'
/**
 * init_commonjs
 *
 * @export
 */
export async function init_commonjs() {
  if (Path.isExist(path_commonjs)) {
    Fail.Task.configFail('commonjs.json is existed')
    return
  }

  await File.createFile(path_commonjs, commonjs)

  await reloadPackage(packageData => {
    if (Rule.isUndefined(packageData.scripts.build)) {
      packageData.scripts.build = 'saber-commonjs'
    } else {
      Fail.Package.Existed.script('saber-commonjs')
    }
    if (Rule.isUndefined(packageData.devDependencies.webpack)) {
      packageData.devDependencies['saber-commonjs'] = '^1.0.7'
    } else {
      Fail.Package.Existed.devDependencie('saber-commonjs')
    }
    return packageData
  })

  Success.Task.initSuccessfully('commonjs.json', path_commonjs)
  return
}
