/*
 * @Author: AK-12
 * @Date: 2019-01-12 13:37:33
 * @Last Modified by: AK-12
 * @Last Modified time: 2019-01-15 15:33:24
 */
import { createModuleFile } from './tasks/__tsmod__'
import { init } from './tasks/__init__'
import { init_Tsconfig } from './tasks/init/__tsconfig__'
import { init_WebpackConfig } from './tasks/init/__webpackConfig__'
import { Options, TerminalLog } from './view/terminal-view'
import { init_gitignore } from './tasks/init/__gitignore__'
import { Terminal } from 'saber-node'
import { egg } from './template/egg'
/**
 * main_create
 *
 * @param {string} param
 */
async function main_create(param: string) {
  if (typeof param !== 'undefined') {
    await createModuleFile(param)
  } else {
    Terminal.Print.tips(TerminalLog.Help.create)
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
      await init_Tsconfig()
      break

    case Options.ConfigItems.webpack:
      await init_WebpackConfig()
      break

    case Options.ConfigItems.git:
      await init_gitignore()
      break

    default:
      Terminal.Print.tips(TerminalLog.Help.config)
      break
  }
}
// main
export async function main() {
  process.on('exit', () => console.log('\n'))

  const params =
    process.argv[2] === '_test'
      ? process.argv.splice(3)
      : process.argv.splice(2)

  if (params.length > 0) {
    if (params[0] === Options.Params.init) {
      await init()
    } else if (params[0] === Options.Params.create) {
      await main_create(params[1])
    } else if (params[0] === Options.Params.config) {
      await main_config(params[1])
    } else if (params[0] === Options.Params.egg) {
      Terminal.Print.tips(egg)
    }
  } else {
    Terminal.Print.tips(TerminalLog.Hello)
  }
}
main()
