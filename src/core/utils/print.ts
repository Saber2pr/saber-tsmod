/*
 * @Author: AK-12
 * @Date: 2019-01-15 12:42:56
 * @Last Modified by: AK-12
 * @Last Modified time: 2019-01-26 20:25:59
 */
import { Terminal } from 'saber-node'
import { TerminalLog } from '../view/terminal-view'
import { path_tsmod } from '../../config/path.config'

/**
 * Success
 * @exports
 */
export namespace Success {
  export namespace Task {
    export const successfully = (taskName: string, message?: string) => {
      Terminal.Print.tips(`--- init ${taskName} successfully ---`)
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
  export namespace Find {
    export const noTsmodFile = () =>
      Terminal.Print.error(`cannot found tsmod.json: ${path_tsmod}`)
  }
  export namespace Task {
    export const initFail = (type: string) => {
      Terminal.Print.error('--- init failed ---')
      Terminal.Print.error(type)
    }
    export const configFail = (type: string) => {
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
      export const script = (scriptName: 'start' | 'dev') =>
        Terminal.Print.error(
          `the scripts '${scriptName}' of 'package.json' is existed!`
        )
      /**
       * devDependencie
       * @param devDependenceName
       */
      export const devDependencie = (
        devDependenceName:
          | 'typescript'
          | 'webpack'
          | 'rollup'
          | 'rollup-plugin-commonjs'
      ) =>
        Terminal.Print.error(
          `the devDependence '${devDependenceName}'  of 'package.json' is existed!`
        )
    }
  }
}
