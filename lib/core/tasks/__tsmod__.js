"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @Author: AK-12
 * @Date: 2019-01-12 17:23:40
 * @Last Modified by: AK-12
 * @Last Modified time: 2019-01-12 22:32:40
 */
var path_config_1 = require("../../config/path.config");
var saber_node_1 = require("saber-node");
/**
 * createModuleFile
 *
 * @export
 * @param {string} name
 * @returns
 */
function createModuleFile(name) {
    return __awaiter(this, void 0, void 0, function () {
        var rename, moduleFilePath, moduleFileContent, moduleTest, moduleTestContent, test_entry, module_test, export_entry, export_entry_content;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    rename = name.replace(/-/g, '_');
                    moduleFilePath = path_config_1.core + "/" + name + ".ts";
                    moduleFileContent = "export let " + rename + " = '" + name + "'";
                    // create module file
                    return [4 /*yield*/, saber_node_1.File.createFile(moduleFilePath, moduleFileContent)];
                case 1:
                    // create module file
                    _a.sent();
                    moduleTest = path_config_1.test + "/test_" + rename + ".ts";
                    moduleTestContent = "\n  import { " + rename + " } from '../core/" + name + "'\n  \n  export function test_" + rename + "(){\n    console.log(" + rename + ")\n  }";
                    // create module test file
                    return [4 /*yield*/, saber_node_1.File.createFile(moduleTest, moduleTestContent)
                        // create test entry
                    ];
                case 2:
                    // create module test file
                    _a.sent();
                    test_entry = path_config_1.test + "/test.ts";
                    module_test = "\n  import { test_" + rename + " } from '../test/test_" + rename + "'\n  \n  test_" + rename + "()\n";
                    return [4 /*yield*/, saber_node_1.Path.isExist(test_entry)];
                case 3:
                    if (!!(_a.sent())) return [3 /*break*/, 5];
                    return [4 /*yield*/, saber_node_1.File.createFile(test_entry, module_test)];
                case 4:
                    _a.sent();
                    return [3 /*break*/, 7];
                case 5: return [4 /*yield*/, saber_node_1.File.pushFile(test_entry, module_test)];
                case 6:
                    _a.sent();
                    _a.label = 7;
                case 7:
                    export_entry = path_config_1.root + "/index.ts";
                    return [4 /*yield*/, saber_node_1.Path.isExist(export_entry)];
                case 8:
                    if (!!(_a.sent())) return [3 /*break*/, 10];
                    export_entry_content = "export * from './core/" + name + "'";
                    return [4 /*yield*/, saber_node_1.File.createFile(export_entry, export_entry_content)];
                case 9:
                    _a.sent();
                    _a.label = 10;
                case 10: return [2 /*return*/, moduleFilePath];
            }
        });
    });
}
exports.createModuleFile = createModuleFile;
