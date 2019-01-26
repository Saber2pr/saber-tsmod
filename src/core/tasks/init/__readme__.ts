/*
 * @Author: AK-12
 * @Date: 2019-01-12 17:18:56
 * @Last Modified by: AK-12
 * @Last Modified time: 2019-01-26 19:28:27
 */
import { IPackageInfor } from '../__init__'
import { readme } from '../../template/readme'
import { path_readme } from '../../../config/path.config'
import { createf } from '../../utils/createf'
/**
 * initReadMe
 *
 * @export
 * @param {IPackageInfor} packageInfor
 */
export async function init_ReadMe(packageInfor: IPackageInfor) {
  await createf(path_readme, readme(packageInfor))
  return
}
