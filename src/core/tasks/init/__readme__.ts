/*
 * @Author: AK-12
 * @Date: 2019-01-12 17:18:56
 * @Last Modified by: AK-12
 * @Last Modified time: 2019-01-15 13:36:01
 */
import { File } from 'saber-node'
import { IPackageInfor } from '../__init__'
import { readme } from '../../template/readme'
import { path_readme } from '../../../config/path.config'
/**
 * initReadMe
 *
 * @export
 * @param {IPackageInfor} packageInfor
 */
export async function init_ReadMe(packageInfor: IPackageInfor) {
  await File.createFile(path_readme, readme(packageInfor))
  return
}
