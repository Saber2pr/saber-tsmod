/*
 * @Author: AK-12
 * @Date: 2019-01-26 19:16:41
 * @Last Modified by:   AK-12
 * @Last Modified time: 2019-01-26 19:16:41
 */
export const rollupConfig = `import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

export default {
  input: './lib/test/test.js',
  output: {
    file: 'build/bundle.js',
    format: 'cjs'
  },
  watch: {
    include: 'lib/**'
  },
  plugins: [resolve(), commonjs()]
}`
