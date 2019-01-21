"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @Author: AK-12
 * @Date: 2019-01-11 22:20:22
 * @Last Modified by: AK-12
 * @Last Modified time: 2019-01-21 06:58:13
 */
var saber_node_1 = require("saber-node");
var ROOT;
if (process.argv[2] === '_test') {
    ROOT = process.cwd() + "/__test__";
    saber_node_1.Terminal.Print.error('**** TEST MODE ****');
}
else {
    ROOT = process.cwd();
}
exports.path_tsmodJson = ROOT + "/tsmod.json";
exports.tsmodJson = saber_node_1.Path.isExist(exports.path_tsmodJson)
    ? saber_node_1.File.Json.read(exports.path_tsmodJson)
    : { src: 'src', core: 'core', test: 'test' };
exports.path_src = ROOT + "/" + exports.tsmodJson.src;
exports.path_core = exports.path_src + "/" + exports.tsmodJson.core;
exports.path_test = exports.path_src + "/" + exports.tsmodJson.test;
// file path
exports.path_packageJson = ROOT + "/package.json";
exports.path_html = ROOT + "/index.html";
exports.path_gitignore = ROOT + "/.gitignore";
exports.path_readme = ROOT + "/README.md";
exports.path_tsconfig = ROOT + "/tsconfig.json";
exports.path_webpackConfig = ROOT + "/webpack.config.js";
