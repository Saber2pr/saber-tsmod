/*
 * @Author: AK-12
 * @Date: 2019-01-12 17:15:41
 * @Last Modified by: AK-12
 * @Last Modified time: 2019-01-15 13:34:23
 */
import { File } from 'saber-node'
import { IPackageInfor } from '../__init__'
import { packageJson } from '../../template/packageJson'
import { path_packageJson } from '../../../config/path.config'

export async function init_PackageJson(packageInfor: IPackageInfor) {
  await File.createFile(path_packageJson, packageJson(packageInfor))
  return
}
