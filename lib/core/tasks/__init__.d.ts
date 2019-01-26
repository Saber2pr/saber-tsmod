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
        dev: 'webpack --watch' | 'rollup -c --watch';
    };
    devDependencies?: {
        typescript: '^3.2.1';
        webpack: '^3.12.0';
        rollup: '^1.1.2';
        'rollup-plugin-commonjs': '^9.2.0';
        'rollup-plugin-node-resolve': '^4.0.0';
    };
}
/**
 * init
 *
 * @export
 */
export declare function init(): Promise<void>;
