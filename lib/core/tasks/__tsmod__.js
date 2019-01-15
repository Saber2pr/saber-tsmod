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
 * @Last Modified time: 2019-01-15 14:34:56
 */
var path_config_1 = require("../../config/path.config");
var saber_node_1 = require("saber-node");
var module_1 = require("../template/module");
var print_1 = require("../utils/print");
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
                    moduleFilePath = path_config_1.path_core + "/" + name + ".ts";
                    moduleFileContent = module_1.module(name, rename).core;
                    return [4 /*yield*/, saber_node_1.Path.isExist(moduleFilePath)];
                case 1:
                    if (_a.sent()) {
                        print_1.Fail.Task.createFail(name);
                        return [2 /*return*/];
                    }
                    // create module file
                    return [4 /*yield*/, saber_node_1.File.createFile(moduleFilePath, moduleFileContent)];
                case 2:
                    // create module file
                    _a.sent();
                    moduleTest = path_config_1.path_test + "/test_" + rename + ".ts";
                    moduleTestContent = module_1.module(name, rename).test;
                    // create module test file
                    return [4 /*yield*/, saber_node_1.File.createFile(moduleTest, moduleTestContent)
                        // create test entry
                    ];
                case 3:
                    // create module test file
                    _a.sent();
                    test_entry = path_config_1.path_test + "/test.ts";
                    module_test = "import { test_" + rename + " } from '../test/test_" + rename + "'\ntest_" + rename + "()\n\n";
                    return [4 /*yield*/, saber_node_1.Path.isExist(test_entry)];
                case 4:
                    if (!!(_a.sent())) return [3 /*break*/, 6];
                    return [4 /*yield*/, saber_node_1.File.createFile(test_entry, module_test)];
                case 5:
                    _a.sent();
                    return [3 /*break*/, 8];
                case 6: return [4 /*yield*/, saber_node_1.File.push(test_entry, module_test)];
                case 7:
                    _a.sent();
                    _a.label = 8;
                case 8:
                    export_entry = path_config_1.path_root + "/index.ts";
                    export_entry_content = "export * from './core/" + name + "'\n";
                    return [4 /*yield*/, saber_node_1.Path.isExist(export_entry)];
                case 9:
                    if (!!(_a.sent())) return [3 /*break*/, 11];
                    return [4 /*yield*/, saber_node_1.File.createFile(export_entry, export_entry_content)];
                case 10:
                    _a.sent();
                    return [3 /*break*/, 13];
                case 11: return [4 /*yield*/, saber_node_1.File.push(export_entry, export_entry_content)];
                case 12:
                    _a.sent();
                    _a.label = 13;
                case 13:
                    print_1.Success.Task.createSuccessfully(moduleFilePath);
                    return [2 /*return*/];
            }
        });
    });
}
exports.createModuleFile = createModuleFile;
