/*
 * @Author: AK-12
 * @Date: 2019-01-12 17:19:45
 * @Last Modified by:   AK-12
 * @Last Modified time: 2019-01-12 17:19:45
 */
import { File } from 'saber-node'

export async function initTsConfig() {
  const tsconfig = './tsconfig.json'
  const tsconfigContent = `{
   \"compilerOptions\": {
     \"target\": \"es5\",
     \"module\": \"commonjs\",
     \"declaration\": true,
     \"outDir\": \"./lib\",
     \"esModuleInterop\": true,
     \"lib\": [
      \"es2015\"
    ]
   },
   \"include\": [\"src\"],
   \"exclude\": [\"node_modules\"]
 }`

  await File.createFile(tsconfig, tsconfigContent)
  return
}
