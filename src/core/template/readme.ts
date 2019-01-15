/*
 * @Author: AK-12
 * @Date: 2019-01-15 13:15:11
 * @Last Modified by:   AK-12
 * @Last Modified time: 2019-01-15 13:15:11
 */
import { IPackageInfor } from '../tasks/__init__'

export const readme = (packageInfor: IPackageInfor) => `# ${packageInfor.name}

> ${packageInfor.description}

\`\`\`bash
# from npm
npm install ${packageInfor.name}

# from github
git clone ${packageInfor.repository}
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

> Author: ${packageInfor.author}

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
