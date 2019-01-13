"use strict";
/*
 * @Author: AK-12
 * @Date: 2019-01-11 22:20:22
 * @Last Modified by: AK-12
 * @Last Modified time: 2019-01-13 13:17:55
 */
Object.defineProperty(exports, "__esModule", { value: true });
// change root value to test.
// temp:(export const root = `${process.cwd()}/src`)
// for exam: root = `./test/src`
exports.root = process.cwd() + "/src";
exports.core = exports.root + "/core";
exports.test = exports.root + "/test";
exports.packageConfig = require(process.cwd() + "/package.json");
