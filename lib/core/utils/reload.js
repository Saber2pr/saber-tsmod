"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var saber_node_1 = require("saber-node");
var path_config_1 = require("../../config/path.config");
/**
 * reloadPackage
 *
 * @export
 * @param {(packageData: IPackageInfor) => IPackageInfor} callback
 */
exports.reloadPackage = saber_node_1.File.Json.pipe(path_config_1.path_packageJson);
