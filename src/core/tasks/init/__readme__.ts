/*
 * @Author: AK-12
 * @Date: 2019-01-12 17:18:56
 * @Last Modified by: AK-12
 * @Last Modified time: 2019-01-13 13:15:46
 */
import { File } from 'saber-node'
import { IPackageInfor } from '../../../config/path.config'
/**
 * initReadMe
 *
 * @export
 * @param {IPackageInfor} packageInfor
 */
export async function initReadMe(packageInfor: IPackageInfor) {
  const { name, description, repository, author } = packageInfor

  const readme = `${process.cwd()}/README.md`
  const readme_content = `# ${name}

  > ${description}
  
  \`\`\`bash
  # from npm
  npm install ${name}
  
  # from github
  git clone ${repository}
  \`\`\`
  
  ---

  ## start
  
  \`\`\`bash
  # install the typescript and webpack
  npm install
  \`\`\`
  
  \`\`\`bash
  # auto compile to commonjs
  npm start
  
  # auto compile to es5
  npm run dev
  
  \`\`\`

  > Author: ${author}

  ---
  
  ## develope and test
  
  > you should write ts in /src
  
  > ts -(tsc)-> commonjs -(webpack)-> es5
  
  > you should make test in /src/test
  
  > export your core in /src/index.ts!

  ---
  
  ## publish
  
  > Before publish, there are some items in package.json should to be updated below:
  
  1. name
  2. version
  3. description
  4. repository(url)
  5. author
  
  \`\`\`bash
  # if all is well, try:
  npm publish
  \`\`\`
  
  `
  await File.createFile(readme, readme_content)
  return
}
