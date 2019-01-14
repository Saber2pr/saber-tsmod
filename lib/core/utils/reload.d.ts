import { IPackageInfor } from '../tasks/__init__';
/**
 * reloadPackage
 *
 * @export
 * @param {(packageData: IPackageInfor) => IPackageInfor} callback
 */
export declare const reloadPackage: (callback: (fileData: IPackageInfor) => IPackageInfor) => Promise<void>;
