/**
 * @interface IPackageInfor
 */
export interface IPackageInfor {
    name: string;
    description: string;
    repository: string;
    author: string;
}
export declare function main(): Promise<void>;
