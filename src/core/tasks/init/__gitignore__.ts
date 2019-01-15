/*
 * @Author: AK-12
 * @Date: 2019-01-13 14:12:46
 * @Last Modified by: AK-12
 * @Last Modified time: 2019-01-15 13:35:26
 */
import { File } from 'saber-node'
import { gitignore } from '../../template/gitignore'
import { path_gitignore } from '../../../config/path.config'
/**
 * init_gitignore
 *
 * @export
 */
export async function init_gitignore() {
  await File.createFile(path_gitignore, gitignore)
  return
}
