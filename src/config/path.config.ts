/*
 * @Author: AK-12
 * @Date: 2019-01-11 22:20:22
 * @Last Modified by: AK-12
 * @Last Modified time: 2019-01-13 13:17:55
 */

// change root value to test.
// temp:(export const root = `${process.cwd()}/src`)
// for exam: root = `./test/src`

export const root = `${process.cwd()}/src`
export const core = `${root}/core`
export const test = `${root}/test`

/** package.json **/

/**
 * @interface IPackageInfor
 */
export interface IPackageInfor {
  name: string
  version?: string
  description: string
  repository: string
  author: string
}

export const packageConfig: IPackageInfor = require(`${process.cwd()}/package.json`)
