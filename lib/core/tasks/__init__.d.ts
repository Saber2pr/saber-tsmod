/**
 * @interface IPackageInfor
 */
export interface IPackageInfor {
    name: string;
    description: string;
    repository: string;
    author: string;
    scripts?: {
        start: 'tsc --watch';
        dev: 'webpack --watch';
    };
    devDependencies?: {
        typescript: '^3.2.1';
        webpack: '^3.12.0';
    };
}
/**
 * init
 *
 * @export
 */
export declare function init(): Promise<void>;
