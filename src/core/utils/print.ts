/*
 * @Author: AK-12
 * @Date: 2019-01-15 12:42:56
 * @Last Modified by: AK-12
 * @Last Modified time: 2019-01-18 10:05:08
 */
import { Terminal } from 'saber-node'
import { TerminalLog } from '../view/terminal-view'

type TaskName_init =
  | 'package.json'
  | 'README.md'
  | 'index.html'
  | '.gitignore'
  | 'commonjs.json'
type TaskName_config = 'tsconfig' | 'webpack' | 'gitignore'
/**
 * Success
 * @exports
 */
export namespace Success {
  export namespace Task {
    export const initSuccessfully = (
      taskName: TaskName_init,
      message?: string
    ) => {
      Terminal.Print.tips(`--- init ${taskName} successfully ---`)
      if (message) {
        Terminal.Print.success(message)
      }
    }
    export const configSuccessfully = (
      taskName: TaskName_config,
      message?: string
    ) => {
      Terminal.Print.tips(`--- config ${taskName} successfully ---`)
      if (message) {
        Terminal.Print.success(message)
      }
    }
    export const createSuccessfully = (filePath: string) =>
      Terminal.Print.success(TerminalLog.Status.modulePath(filePath))
  }
}
/**
 * Error
 * @exports
 */
export namespace Fail {
  export namespace Task {
    export const initFail = (
      type:
        | '<Package name> cannot be null!'
        | 'package.json is exist!'
        | 'README.md is existed!'
    ) => {
      Terminal.Print.error('--- init failed ---')
      Terminal.Print.error(type)
    }
    export const configFail = (
      type:
        | '.gitignore is existed!'
        | 'tsconfig.json is existed!'
        | 'webpack.config.js is existed!'
        | 'index.html is existed!'
        | 'commonjs.json is existed'
    ) => {
      Terminal.Print.error('--- config failed ---')
      Terminal.Print.error(type)
    }
    export const createFail = (name: string) =>
      Terminal.Print.error(`module '${name}' is existed!`)
  }
  export namespace Package {
    export namespace Existed {
      /**
       * script
       * @param scriptName
       */
      export const script = (scriptName: 'start' | 'dev' | 'saber-commonjs') =>
        Terminal.Print.error(
          `the scripts '${scriptName}' of 'package.json' is existed!`
        )
      /**
       * devDependencie
       * @param devDependenceName
       */
      export const devDependencie = (
        devDependenceName: 'typescript' | 'webpack' | 'saber-commonjs'
      ) =>
        Terminal.Print.error(
          `the devDependence '${devDependenceName}'  of 'package.json' is existed!`
        )
    }
  }
}
