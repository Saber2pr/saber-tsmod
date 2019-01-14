/*
 * @Author: AK-12
 * @Date: 2019-01-13 23:12:10
 * @Last Modified by:   AK-12
 * @Last Modified time: 2019-01-13 23:12:10
 */
import { IPackageInfor } from '../tasks/__init__'
import { File } from 'saber-node'
/**
 * reloadPackage
 *
 * @export
 * @param {(packageData: IPackageInfor) => IPackageInfor} callback
 */
export const reloadPackage = File.edit<IPackageInfor>(
  `${process.cwd()}/package.json`
)
