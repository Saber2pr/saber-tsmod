/*
 * @Author: AK-12
 * @Date: 2019-01-13 14:12:46
 * @Last Modified by: AK-12
 * @Last Modified time: 2019-01-13 14:14:18
 */
import { File } from 'saber-node'
/**
 * init_gitignore
 *
 * @export
 */
export async function init_gitignore() {
  const gitignore = `${process.cwd()}/.gitignore`
  const gitignoreContent = `node_modules/
package-lock.json
dist/
.vscode/
build/
test/`

  await File.createFile(gitignore, gitignoreContent)
  return
}
