/*
 * @Author: AK-12
 * @Date: 2019-01-20 07:04:42
 * @Last Modified by: AK-12
 * @Last Modified time: 2019-01-26 15:50:49
 */
export namespace Rule {
  export const isUndefined = (obj: any): obj is undefined =>
    typeof obj === 'undefined'
}
export namespace Name {
  export const reset = (name: string) => name.replace(/\-|\.|\//g, '_')
}
