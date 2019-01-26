/*
 * @Author: AK-12
 * @Date: 2019-01-26 19:21:49
 * @Last Modified by: AK-12
 * @Last Modified time: 2019-01-26 20:26:16
 */
import { Path, File } from 'saber-node'
import { Fail, Success } from './print'
/**
 * @export
 * @param {string} filePath
 * @param {string} fileTemplate
 */
export async function createf(filePath: string, fileTemplate: string) {
  if (Path.isExist(filePath)) {
    Fail.Task.configFail(`${Path.getFileName(filePath)} is existed!`)
    return
  }
  await File.createFile(filePath, fileTemplate)
  Success.Task.successfully(`${Path.getFileName(filePath)}`, filePath)
  return
}
