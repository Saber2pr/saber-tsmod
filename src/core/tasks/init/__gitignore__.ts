/*
 * @Author: AK-12
 * @Date: 2019-01-13 14:12:46
 * @Last Modified by: AK-12
 * @Last Modified time: 2019-01-15 14:54:24
 */
import { File, Path } from 'saber-node'
import { gitignore } from '../../template/gitignore'
import { path_gitignore } from '../../../config/path.config'
import { Fail, Success } from '../../utils/print'
/**
 * init_gitignore
 *
 * @export
 */
export async function init_gitignore() {
  if (Path.isExist(path_gitignore)) {
    Fail.Task.configFail('.gitignore is existed!')
    return
  }
  await File.createFile(path_gitignore, gitignore)
  Success.Task.initSuccessfully('.gitignore', path_gitignore)
  return
}
