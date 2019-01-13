export declare const root: string;
export declare const core: string;
export declare const test: string;
/** package.json **/
/**
 * @interface IPackageInfor
 */
export interface IPackageInfor {
    name: string;
    version?: string;
    description: string;
    repository: string;
    author: string;
}
export declare const packageConfig: IPackageInfor;
