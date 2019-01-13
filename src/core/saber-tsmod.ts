/*
 * @Author: AK-12
 * @Date: 2019-01-12 13:37:33
 * @Last Modified by: AK-12
 * @Last Modified time: 2019-01-13 14:20:46
 */
import { createModuleFile } from './tasks/__tsmod__'
import { init } from './tasks/__init__'
import { initTs_Config } from './tasks/init/__tsconfig__'
import { init_WebpackConfig } from './tasks/init/__webpackConfig__'
import { Options, TerminalLog } from './view/terminal-view'
import { init_gitignore } from './tasks/init/__gitignore__'

// main
export async function main() {
  const params = process.argv.splice(2)
  if (params.length > 0) {
    if (params[0] === Options.Params.init) {
      init()
    } else if (params[0] === Options.Params.create) {
      main_create(params[1])
    } else if (params[0] === Options.Params.config) {
      main_config(params[1])
    }
  } else {
    console.log(TerminalLog.Hello)
  }
}
/**
 * main_create
 *
 * @param {string} param
 */
async function main_create(param: string) {
  if (typeof param !== 'undefined') {
    const res = await createModuleFile(param)
    console.log(TerminalLog.Status.modulePath(res))
  } else {
    console.log(TerminalLog.Help.create)
  }
}
/**
 * main_config
 *
 * @param {string} param
 */
async function main_config(param: string) {
  switch (param as Options.ConfigItems) {
    case Options.ConfigItems.ts:
      await initTs_Config()
      break

    case Options.ConfigItems.webpack:
      await init_WebpackConfig()
      break

    case Options.ConfigItems.git:
      await init_gitignore()
      break

    default:
      console.log(TerminalLog.Help.config)
      break
  }
}
main()
