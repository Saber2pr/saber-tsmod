/*
 * @Author: AK-12
 * @Date: 2019-01-12 17:18:01
 * @Last Modified by: AK-12
 * @Last Modified time: 2019-01-15 13:34:58
 */
import { File } from 'saber-node'
import { IPackageInfor } from '../__init__'
import { html } from '../../template/html'
import { path_html } from '../../../config/path.config'
/**
 * init_Html
 *
 * @param {IPackageInfor} packageInfor
 */
export async function init_Html(packageInfor: IPackageInfor) {
  await File.createFile(path_html, html(packageInfor))
  return
}
