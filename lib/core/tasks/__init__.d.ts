/**
 * @interface IPackageInfor
 */
export interface IPackageInfor {
    name: string;
    description: string;
    repository: string;
    author: string;
}
/**
 * init
 *
 * @export
 */
export declare function init(): Promise<void>;
