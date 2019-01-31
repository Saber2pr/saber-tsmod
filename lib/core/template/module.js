"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var saber_node_1 = require("saber-node");
/*
 * @Author: AK-12
 * @Date: 2019-01-15 13:53:03
 * @Last Modified by: AK-12
 * @Last Modified time: 2019-01-21 08:10:57
 */
exports.module = function (name, variable) { return ({
    core: "export const " + variable + " = '" + name + "'",
    test: "import { " + variable + " } from '../" + saber_node_1.Path.makePathStep(saber_node_1.Path.slashCount(name)) + "core/" + name + "'\n\nexport function test_" + variable + "(){\n  typeof alert === 'undefined'? console.log(" + variable + ") : alert(" + variable + ")\n}"
}); };
