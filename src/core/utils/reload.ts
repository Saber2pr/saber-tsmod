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
export async function reloadPackage(
  callback: (packageData: IPackageInfor) => IPackageInfor
) {
  const packageJson_path = `${process.cwd()}/package.json`
  const res: any = await File.read(packageJson_path)
  const packageJson: IPackageInfor = JSON.parse(res) as IPackageInfor

  await File.createFile(
    packageJson_path,
    JSON.stringify(callback(packageJson), null, 2)
  )
  return
}
