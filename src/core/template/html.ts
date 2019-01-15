/*
 * @Author: AK-12
 * @Date: 2019-01-15 13:10:44
 * @Last Modified by: AK-12
 * @Last Modified time: 2019-01-15 13:16:38
 */
import { IPackageInfor } from '../tasks/__init__'

export const html = (packageInfor: IPackageInfor) => `<!DOCTYPE html>
<html lang=\"en\">

<head>
  <meta charset=\"UTF-8\">
  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">
  <title>${packageInfor.name}</title>
</head>

<body>
  <p>package: ${packageInfor.name}</p>
  <p>description: ${packageInfor.description}</p>
  <a href="${packageInfor.repository}">repository: ${
  packageInfor.repository
}</a>
  <p>author:${packageInfor.author}</p>
  </body>
<script src=\"./build/bundle.js\"></script>

</html>`
