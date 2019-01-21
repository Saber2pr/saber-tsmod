/*
 * @Author: AK-12
 * @Date: 2019-01-21 06:56:36
 * @Last Modified by: AK-12
 * @Last Modified time: 2019-01-21 07:05:11
 */
import { File, Path } from 'saber-node'
import { path_tsmodJson } from '../../../config/path.config'
import { Fail, Success } from '../../utils/print'
import { tsmodJson } from '../../template/tsmodJson'
/**
 * init_tsmod
 *
 * @export
 */
export async function init_tsmod() {
  if (Path.isExist(path_tsmodJson)) {
    Fail.Task.configFail('tsmod.json is existed!')
    return
  }
  await File.createFile(path_tsmodJson, tsmodJson)
  Success.Task.configSuccessfully('tsmod', path_tsmodJson)
  return
}
