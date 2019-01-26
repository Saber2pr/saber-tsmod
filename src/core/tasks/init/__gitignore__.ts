/*
 * @Author: AK-12
 * @Date: 2019-01-13 14:12:46
 * @Last Modified by: AK-12
 * @Last Modified time: 2019-01-26 19:23:10
 */
import { gitignore } from '../../template/gitignore'
import { path_gitignore } from '../../../config/path.config'
import { createf } from '../../utils/createf'
/**
 * init_gitignore
 *
 * @export
 */
export async function init_gitignore() {
  await createf(path_gitignore, gitignore)
  return
}
