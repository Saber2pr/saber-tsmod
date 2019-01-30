/*
 * @Author: AK-12
 * @Date: 2019-01-26 19:16:41
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-01-30 19:15:47
 */
export const rollupConfig = `import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
const packageJson = require(\`$\{process.cwd()\}/package.json\`)

export default {
  input: './lib/test/test.js',
  output: {
    file: 'build/bundle.js',
    format: 'iife',
    name: packageJson.name
  },
  watch: {
    include: 'lib/**'
  },
  plugins: [resolve(), commonjs()]
}`
