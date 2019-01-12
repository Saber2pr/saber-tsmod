/*
 * @Author: AK-12
 * @Date: 2019-01-12 13:37:33
 * @Last Modified by: AK-12
 * @Last Modified time: 2019-01-12 17:23:51
 */
import { createModuleFile } from './tasks/__tsmod__'
import { init } from './tasks/__init__'
/**
 * @interface IPackageInfor
 */
export interface IPackageInfor {
  name: string
  description: string
  repository: string
  author: string
}
/**
 * Params
 *
 * @enum {number}
 */
enum Params {
  init = 'init',
  create = 'create'
}
/**
 * Log
 */
namespace TerminalLog {
  export const Hello = `
  ______________________________...
  |
  | += saber-tsmod =+
  | Usage:
  | 
  | init: init the project files.
  | create <module> : create a new ts module and its test file.
  |
  |_____________________________...
  `
  export namespace Help {
    export const create = `
    ______________________________...
    |
    |create <module> : create a new ts module and its test file.
    |  you should set the name of module.
    |_____________________________...

    `
  }
  export namespace Status {
    export const modulePath = (path: string) => `
    ______________________________...
    |
    | module create successfully in path:
    |    ${path}
    |_____________________________...
    `
  }
}
// main
export async function main() {
  const params = process.argv.splice(2)
  if (params.length > 0) {
    if (params[0] === Params.init) {
      init()
    } else if (params[0] === Params.create) {
      if (typeof params[1] !== 'undefined') {
        const res = await createModuleFile(params[1])
        console.log(TerminalLog.Status.modulePath(res))
      } else {
        console.log(TerminalLog.Help.create)
      }
    }
  } else {
    console.log(TerminalLog.Hello)
  }
}
main()
