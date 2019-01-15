/*
 * @Author: AK-12
 * @Date: 2019-01-15 12:42:56
 * @Last Modified by: AK-12
 * @Last Modified time: 2019-01-15 13:30:43
 */
import { Terminal } from 'saber-node'
/**
 * Success
 * @exports
 */
export namespace Success {
  export namespace Task {
    export const initSuccessfully = () =>
      Terminal.Print.success('--- init successfully ---')
  }
}
/**
 * Error
 * @exports
 */
export namespace Fail {
  export namespace Task {
    export const initFail = (
      type: '<Package name> cannot be null!' | 'package.json is exist!'
    ) => {
      Terminal.Print.error('--- init failed ---')
      Terminal.Print.error(type)
    }
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
        devDependenceName: 'typescript' | 'webpack'
      ) =>
        Terminal.Print.error(
          `the devDependence '${devDependenceName}'  of 'package.json' is existed!`
        )
    }
  }
}
