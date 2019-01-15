"use strict";
/*
 * @Author: AK-12
 * @Date: 2019-01-11 22:20:22
 * @Last Modified by: AK-12
 * @Last Modified time: 2019-01-15 13:40:11
 */
Object.defineProperty(exports, "__esModule", { value: true });
// change root value to test.
// for exam:
// test
exports.ROOT = process.cwd() + "/__test__";
// work
// export const ROOT = process.cwd()
exports.path_root = exports.ROOT + "/src";
exports.path_core = exports.path_root + "/core";
exports.path_test = exports.path_root + "/test";
exports.path_packageJson = exports.ROOT + "/package.json";
exports.path_html = exports.ROOT + "/index.html";
exports.path_gitignore = exports.ROOT + "/.gitignore";
exports.path_readme = exports.ROOT + "/README.md";
exports.path_tsconfig = exports.ROOT + "/tsconfig.json";
exports.path_webpackConfig = exports.ROOT + "/webpack.config.js";
