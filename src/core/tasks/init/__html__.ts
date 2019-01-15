/*
 * @Author: AK-12
 * @Date: 2019-01-12 17:18:01
 * @Last Modified by: AK-12
 * @Last Modified time: 2019-01-15 14:52:31
 */
import { File, Path } from 'saber-node'
import { IPackageInfor } from '../__init__'
import { html } from '../../template/html'
import { path_html } from '../../../config/path.config'
import { Fail, Success } from '../../utils/print'
/**
 * init_Html
 *
 * @param {IPackageInfor} packageInfor
 */
export async function init_Html(packageInfor: IPackageInfor) {
  if (await Path.isExist(path_html)) {
    Fail.Task.configFail('index.html is existed!')
    return
  }
  await File.createFile(path_html, html(packageInfor))
  Success.Task.initSuccessfully('index.html', path_html)
  return
}
