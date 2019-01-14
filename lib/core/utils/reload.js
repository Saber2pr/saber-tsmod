"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var saber_node_1 = require("saber-node");
/**
 * reloadPackage
 *
 * @export
 * @param {(packageData: IPackageInfor) => IPackageInfor} callback
 */
exports.reloadPackage = saber_node_1.File.edit(process.cwd() + "/package.json");
