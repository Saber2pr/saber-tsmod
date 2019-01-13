/*
 * @Author: AK-12
 * @Date: 2019-01-12 17:19:45
 * @Last Modified by: AK-12
 * @Last Modified time: 2019-01-13 23:16:41
 */
import { File } from 'saber-node'
import { reloadPackage } from '../../utils/reload'

export async function initTs_Config() {
  const tsconfig = `${process.cwd()}/tsconfig.json`
  const tsconfigContent = `{
  \"compilerOptions\": {
     \"target\": \"es5\",
     \"module\": \"commonjs\",
     \"declaration\": true,
     \"outDir\": \"./lib\",
     \"esModuleInterop\": true,
     \"lib\": [
      \"dom\",
      \"es2015\"
    ]
  },
  \"include\": [\"src\"],
  \"exclude\": [\"node_modules\"]
}`

  await File.createFile(tsconfig, tsconfigContent)

  await reloadPackage(packageData => {
    packageData.scripts.start = 'tsc --watch'
    packageData.devDependencies.typescript = '^3.2.1'
    return packageData
  })

  return
}
