/*
 * @Author: AK-12
 * @Date: 2019-01-12 17:18:01
 * @Last Modified by: AK-12
 * @Last Modified time: 2019-01-26 19:24:08
 */
import { IPackageInfor } from '../__init__'
import { html } from '../../template/html'
import { path_html } from '../../../config/path.config'
import { createf } from '../../utils/createf'
/**
 * init_Html
 *
 * @param {IPackageInfor} packageInfor
 */
export async function init_Html(packageInfor: IPackageInfor) {
  await createf(path_html, html(packageInfor))
  return
}
