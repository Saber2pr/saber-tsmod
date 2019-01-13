/*
 * @Author: AK-12
 * @Date: 2019-01-13 13:14:13
 * @Last Modified by:   AK-12
 * @Last Modified time: 2019-01-13 13:14:13
 */
import { packageConfig } from '../../config/path.config'
/**
 * Options
 */
export namespace Options {
  /**
   * Params
   *
   * @enum {number}
   */
  export enum Params {
    init = 'init',
    create = 'create',
    config = 'config'
  }
  /**
   * ConfigItems
   *
   * @export
   * @enum {number}
   */
  export enum ConfigItems {
    ts = 'ts',
    webpack = 'webpack'
  }
}
/**
 * Log
 */
export namespace TerminalLog {
  const options = {
    init: 'init: init the project files.',
    create: 'create <module> : create a new ts module and its test file.',
    config: "config <option> : option is 'ts' , or 'webpack'.",
    config_ts: `${Options.ConfigItems.ts} : create tsconfig.json`,
    config_webpack: `${Options.ConfigItems.webpack} : create webpack.config.js`
  }
  export const Hello = `
  ______________________________...
  |
  | += saber-tsmod v${packageConfig.version} =+
  | Usage:
  | 
  | ${options.init}
  | ${options.create}
  | ${options.config}
  |
  |_____________________________...
  `
  export namespace Help {
    export const create = `
    ______________________________...
    |
    |${options.create}
    |  you should set the name of module.
    |_____________________________...

    `
    export const config = `
      ______________________________...
      |choose a option
      |
      |1. ${options.config_ts}
      |2. ${options.config_webpack}
      |______________________________...
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
