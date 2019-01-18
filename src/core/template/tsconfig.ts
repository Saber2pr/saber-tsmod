/*
 * @Author: AK-12
 * @Date: 2019-01-15 13:01:52
 * @Last Modified by:   AK-12
 * @Last Modified time: 2019-01-15 13:01:52
 */
export const tsconfig = `{
  \"compilerOptions\": {
    \"target\": \"es5\",
    \"module\": \"commonjs\",
    \"declaration\": true,
    \"outDir\": \"./lib\",
    \"esModuleInterop\": true,
    \"lib\": [
     \"dom\",
     \"es2015\"
    ]
  },
  \"include\": [\"src\"],
  \"exclude\": [\"node_modules\"]
}`
