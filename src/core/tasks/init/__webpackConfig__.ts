/*
 * @Author: AK-12
 * @Date: 2019-01-12 17:20:24
 * @Last Modified by: AK-12
 * @Last Modified time: 2019-01-15 14:49:58
 */
import { File, Path } from 'saber-node'
import { reloadPackage } from '../../utils/reload'
import { Rule } from '../../utils/rule'
import { Fail, Success } from '../../utils/print'
import { webpackConfig } from '../../template/webpackConfig'
import { path_webpackConfig } from '../../../config/path.config'
/**
 * initWebpackConfig
 *
 * @export
 */
export async function init_WebpackConfig() {
  if (await Path.isExist(path_webpackConfig)) {
    Fail.Task.configFail('webpack.config.js is existed!')
    return
  }
  await File.createFile(path_webpackConfig, webpackConfig)

  await reloadPackage(packageData => {
    if (Rule.isUndefined(packageData.scripts.dev)) {
      packageData.scripts.dev = 'webpack --watch'
    } else {
      Fail.Package.Existed.script('dev')
    }
    if (Rule.isUndefined(packageData.devDependencies.webpack)) {
      packageData.devDependencies.webpack = '^3.12.0'
    } else {
      Fail.Package.Existed.devDependencie('webpack')
    }
    return packageData
  })

  Success.Task.configSuccessfully('webpack', path_webpackConfig)
  return
}
