/*
 * @Author: AK-12
 * @Date: 2019-01-12 17:15:41
 * @Last Modified by: AK-12
 * @Last Modified time: 2019-01-15 14:50:44
 */
import { File, Path } from 'saber-node'
import { IPackageInfor } from '../__init__'
import { packageJson } from '../../template/packageJson'
import { path_packageJson } from '../../../config/path.config'
import { Fail, Success } from '../../utils/print'

export async function init_PackageJson(packageInfor: IPackageInfor) {
  if (Path.isExist(path_packageJson)) {
    Fail.Task.initFail('package.json is exist!')
    return
  }
  await File.createFile(path_packageJson, packageJson(packageInfor))

  Success.Task.initSuccessfully('package.json', path_packageJson)
  return
}
