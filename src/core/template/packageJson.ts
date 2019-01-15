/*
 * @Author: AK-12
 * @Date: 2019-01-15 13:16:52
 * @Last Modified by:   AK-12
 * @Last Modified time: 2019-01-15 13:16:52
 */
import { IPackageInfor } from '../tasks/__init__'

export const packageJson = (packageInfor: IPackageInfor) => `{
  \"name\": \"${packageInfor.name}\",
  \"version\": \"1.0.0\",
  \"description\": \"${packageInfor.description}\",
  \"repository\": {
    \"type\": \"git\",
    \"url\": \"git+${packageInfor.repository}\"
  },
  \"author\": \"${packageInfor.author}\",
  \"license\": \"ISC\",
  \"main\": \"./lib/index.js\",
  \"scripts\": {
    \"start\": \"tsc --watch\",
    \"test\": \"node ./lib/test/test.js\"
  },
  \"devDependencies\": {
    \"typescript\": \"^3.2.1\"
  }
}`
