"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @Author: AK-12
 * @Date: 2019-01-15 13:53:03
 * @Last Modified by: AK-12
 * @Last Modified time: 2019-01-15 13:55:10
 */
exports.module = function (name, variable) { return ({
    core: "export let " + variable + " = '" + name + "'",
    test: "import { " + variable + " } from '../core/" + name + "'\n\nexport function test_" + variable + "(){\n  alert(" + variable + ")\n}"
}); };
