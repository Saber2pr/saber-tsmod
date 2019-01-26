/*
 * @Author: AK-12
 * @Date: 2019-01-12 17:20:24
 * @Last Modified by: AK-12
 * @Last Modified time: 2019-01-26 20:50:59
 */
import { reloadPackage } from '../../utils/reload'
import { Rule } from '../../utils/rule'
import { Fail } from '../../utils/print'
import { webpackConfig } from '../../template/webpackConfig'
import { path_webpackConfig } from '../../../config/path.config'
import { createf } from '../../utils/createf'
/**
 * initWebpackConfig
 *
 * @export
 */
export async function init_WebpackConfig() {
  await createf(path_webpackConfig, webpackConfig)

  await reloadPackage(packageData => {
    if (Rule.isUndefined(packageData.scripts.dev)) {
      packageData.scripts.dev = 'webpack --watch'
      if (Rule.isUndefined(packageData.devDependencies.webpack)) {
        packageData.devDependencies.webpack = '^3.12.0'
      } else {
        Fail.Package.Existed.devDependencie('webpack')
      }
    } else {
      Fail.Package.Existed.script('dev')
    }
    return packageData
  })
  return
}
