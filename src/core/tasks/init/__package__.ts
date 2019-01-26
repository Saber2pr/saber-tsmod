/*
 * @Author: AK-12
 * @Date: 2019-01-12 17:15:41
 * @Last Modified by: AK-12
 * @Last Modified time: 2019-01-26 19:24:47
 */
import { IPackageInfor } from '../__init__'
import { packageJson } from '../../template/packageJson'
import { path_packageJson } from '../../../config/path.config'
import { createf } from '../../utils/createf'

export async function init_PackageJson(packageInfor: IPackageInfor) {
  await createf(path_packageJson, packageJson(packageInfor))
  return
}
