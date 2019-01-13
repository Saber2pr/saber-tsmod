/*
 * @Author: AK-12
 * @Date: 2019-01-12 17:20:24
 * @Last Modified by: AK-12
 * @Last Modified time: 2019-01-13 23:13:58
 */
import { File } from 'saber-node'
import { reloadPackage } from '../../utils/reload'
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

  await reloadPackage(packageData => {
    packageData.scripts.dev = 'webpack --watch'
    packageData.devDependencies.webpack = '^3.12.0'
    return packageData
  })

  return
}
