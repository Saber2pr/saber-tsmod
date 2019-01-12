/*
 * @Author: AK-12
 * @Date: 2019-01-12 17:15:41
 * @Last Modified by: AK-12
 * @Last Modified time: 2019-01-12 17:17:18
 */
import { File } from 'saber-node'
import { IPackageInfor } from '../../saber-tsmod'

export async function initPackageJson(packageInfor: IPackageInfor) {
  const { name, description, repository, author } = packageInfor

  // create package.json
  const filePath = './package_test.json'
  const content = `{
    \"name\": \"${name}\",
    \"version\": \"1.0.0\",
    \"description\": \"${description}\",
    \"repository\": {
      \"type\": \"git\",
      \"url\": \"git+${repository}\"
    },
    \"author\": \"${author}\",
    \"license\": \"ISC\",
    \"main\": \"./lib/index.js\",
    \"scripts\": {
      \"start\": \"tsc --watch\",
      \"dev\": \"webpack --watch\"
    },
    \"devDependencies\": {
      \"typescript\": \"^3.2.1\",
      \"webpack\": \"^3.12.0\"
    }
  }`

  await File.createFile(filePath, content)
  return
}
