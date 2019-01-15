/*
 * @Author: AK-12
 * @Date: 2019-01-12 17:18:56
 * @Last Modified by: AK-12
 * @Last Modified time: 2019-01-15 14:51:55
 */
import { File, Path } from 'saber-node'
import { IPackageInfor } from '../__init__'
import { readme } from '../../template/readme'
import { path_readme } from '../../../config/path.config'
import { Fail, Success } from '../../utils/print'
/**
 * initReadMe
 *
 * @export
 * @param {IPackageInfor} packageInfor
 */
export async function init_ReadMe(packageInfor: IPackageInfor) {
  if (await Path.isExist(path_readme)) {
    Fail.Task.initFail('README.md is existed!')
    return
  }
  await File.createFile(path_readme, readme(packageInfor))
  Success.Task.initSuccessfully('README.md', path_readme)
  return
}
