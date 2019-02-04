/*
 * @Author: AK-12
 * @Date: 2019-01-13 13:14:13
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-02-04 14:42:41
 */
const version = '1.5.7'
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
    config = 'config',
    egg = 'saber2pr'
  }
  /**
   * ConfigItems
   *
   * @export
   * @enum {number}
   */
  export enum ConfigItems {
    ts = 'ts',
    webpack = 'webpack',
    git = 'git',
    rollup = 'rollup',
    npm = 'npm'
  }
}
/**
 * Log
 */
export namespace TerminalLog {
  const options = {
    init: 'init: init the project files.',
    create: 'create <module> : create a new ts module and its test file.',
    createWithConf: 'create ~c : create src use a tsmod.json file.',
    config: "config <option> : option is 'ts' , 'webpack', 'git' or 'rollup'.",
    config_ts: `${Options.ConfigItems.ts} : create tsconfig.json`,
    config_webpack: `${Options.ConfigItems.webpack} : create webpack.config.js`,
    config_git: `${Options.ConfigItems.git}: create .gitignore`,
    config_npm: `${Options.ConfigItems.npm}: create .npmignore`,
    config_rollup: `${Options.ConfigItems.rollup}: create rollup.config.js`
  }
  export const Hello = `
  ______________________________...
  |
  | += saber-tsmod v${version} =+
  | Usage:
  | 
  | ${options.init}
  | ${options.create}
  | ${options.createWithConf}
  | ${options.config}
  |
  |_____________________________...
  `
  export namespace Select {
    export const config = `
    config webpack or rollup?(No): 
      1. webpack
      2. rollup
    [select(1|2)]:`
  }
  export namespace Help {
    export const create = `
    ______________________________...
    |
    |1. ${options.create}
    |  you should set the name of module.
    |
    |2. ${options.createWithConf}
    |_____________________________...

    `
    export const config = `
      ______________________________...
      |choose a option:
      |
      |1. ${options.config_ts}
      |2. ${options.config_webpack}
      |3. ${options.config_git}
      |4. ${options.config_rollup}
      |5. ${options.config_npm}
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
