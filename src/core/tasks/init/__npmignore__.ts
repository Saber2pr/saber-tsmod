/*
 * @Author: AK-12
 * @Date: 2019-01-13 14:12:46
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-02-04 14:40:38
 */
import { path_npmignore } from '../../../config/path.config'
import { createf } from '../../utils/createf'
import { npmignore } from '../../template/npmignore'
/**
 * init_gitignore
 *
 * @export
 */
export async function init_npmignore() {
  await createf(path_npmignore, npmignore)
  return
}
