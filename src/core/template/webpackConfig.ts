/*
 * @Author: AK-12
 * @Date: 2019-01-15 13:03:17
 * @Last Modified by:   AK-12
 * @Last Modified time: 2019-01-15 13:03:17
 */
export const webpackConfig = `const path = require('path');

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
