/*
 * @Author: AK-12
 * @Date: 2019-01-12 17:18:01
 * @Last Modified by: AK-12
 * @Last Modified time: 2019-01-12 17:21:56
 */
import { File } from 'saber-node'
import { IPackageInfor } from '../../saber-tsmod'

/**
 * initHtml
 *
 * @param {IPackageInfor} packageInfor
 */
export async function initHtml(packageInfor: IPackageInfor) {
  const { name, description, repository, author } = packageInfor

  // create html
  const html = './index.html'
  const html_content = `<!DOCTYPE html>
 <html lang=\"en\">
 
 <head>
   <meta charset=\"UTF-8\">
   <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
   <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">
   <title>${name}</title>
 </head>
 
 <body>
   <p>package: ${name}</p>
   <p>description: ${description}</p>
   <a href="${repository}">repository: ${repository}</a>
   <p>author:${author}</p>
   </body>
 <script src=\"./build/bundle.js\"></script>
 
 </html>`
  await File.createFile(html, html_content)
  return
}
