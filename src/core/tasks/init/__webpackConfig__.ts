/*
 * @Author: AK-12
 * @Date: 2019-01-12 17:20:24
 * @Last Modified by: AK-12
 * @Last Modified time: 2019-01-13 14:17:59
 */
import { File } from 'saber-node'
import { IPackageInfor } from '../__init__'
/**
 * initWebpackConfig
 *
 * @export
 */
export async function init_WebpackConfig() {
  const webpackConfig = `${process.cwd()}/webpack.config.js`
  const webpackConfigContent = `const path = require('path');

module.exports = {
  entry: './lib/test/test.js',
  resolve: {
    extensions: ['.js']
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000,
    ignored: /node_modules/
  }
};`

  await File.createFile(webpackConfig, webpackConfigContent)

  const packageJson_path = `${process.cwd()}/package.json`
  const res: any = await File.read(packageJson_path)
  const packageJson: IPackageInfor = res as IPackageInfor

  packageJson.scripts.dev = 'webpack --watch'
  packageJson.devDependencies.webpack = '^3.12.0'
  await File.createFile(packageJson_path, JSON.stringify(packageJson, null, 2))

  return
}
