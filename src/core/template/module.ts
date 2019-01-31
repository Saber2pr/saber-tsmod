import { Path } from 'saber-node'

/*
 * @Author: AK-12
 * @Date: 2019-01-15 13:53:03
 * @Last Modified by: AK-12
 * @Last Modified time: 2019-01-21 08:10:57
 */
export const module = (name: string, variable: string) => ({
  core: `export const ${variable} = '${name}'`,
  test: `import { ${variable} } from '../${Path.makePathStep(
    Path.slashCount(name)
  )}core/${name}'\n
export function test_${variable}(){
  typeof alert === 'undefined'? console.log(${variable}) : alert(${variable})
}`
})
