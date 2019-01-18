/*
 * @Author: AK-12
 * @Date: 2019-01-15 13:53:03
 * @Last Modified by: AK-12
 * @Last Modified time: 2019-01-18 10:39:04
 */
export const module = (name: string, variable: string) => ({
  core: `export let ${variable} = '${name}'`,
  test: `import { ${variable} } from '../core/${name}'\n
export function test_${variable}(){
  typeof alert === 'undefined' ? console.log(${variable}) : alert(${variable})
}`
})
