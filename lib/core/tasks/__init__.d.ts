/**
 * @interface IPackageInfor
 */
export interface IPackageInfor {
    name: string;
    description: string;
    repository: string;
    author: string;
    scripts?: {
        dev: 'webpack --watch';
    };
    devDependencies?: {
        webpack: '^3.12.0';
    };
}
/**
 * init
 *
 * @export
 */
export declare function init(): Promise<void>;
