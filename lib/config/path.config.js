"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var saber_node_1 = require("saber-node");
/*
 * @Author: AK-12
 * @Date: 2019-01-11 22:20:22
 * @Last Modified by: AK-12
 * @Last Modified time: 2019-01-26 19:36:11
 */
var ROOT;
if (process.argv[2] === '_test') {
    ROOT = process.cwd() + "/__test__";
    saber_node_1.Terminal.Print.error('**** TEST MODE ****');
}
else {
    ROOT = process.cwd();
}
exports.path_root = ROOT + "/src";
exports.path_core = exports.path_root + "/core";
exports.path_test = exports.path_root + "/test";
// file path
exports.path_packageJson = ROOT + "/package.json";
exports.path_html = ROOT + "/index.html";
exports.path_gitignore = ROOT + "/.gitignore";
exports.path_readme = ROOT + "/README.md";
exports.path_tsconfig = ROOT + "/tsconfig.json";
exports.path_webpackConfig = ROOT + "/webpack.config.js";
exports.path_tsmod = ROOT + "/tsmod.json";
exports.path_rollupConfig = ROOT + "/rollup.config.js";
