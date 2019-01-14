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
 * @Date: 2019-01-12 13:37:33
 * @Last Modified by: AK-12
 * @Last Modified time: 2019-01-14 22:27:08
 */
var __tsmod__1 = require("./tasks/__tsmod__");
var __init__1 = require("./tasks/__init__");
var __tsconfig__1 = require("./tasks/init/__tsconfig__");
var __webpackConfig__1 = require("./tasks/init/__webpackConfig__");
var terminal_view_1 = require("./view/terminal-view");
var __gitignore__1 = require("./tasks/init/__gitignore__");
var saber_node_1 = require("saber-node");
/**
 * main_create
 *
 * @param {string} param
 */
function main_create(param) {
    return __awaiter(this, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(typeof param !== 'undefined')) return [3 /*break*/, 2];
                    return [4 /*yield*/, __tsmod__1.createModuleFile(param)];
                case 1:
                    res = _a.sent();
                    saber_node_1.Terminal.Print.success(terminal_view_1.TerminalLog.Status.modulePath(res));
                    return [3 /*break*/, 3];
                case 2:
                    saber_node_1.Terminal.Print.tips(terminal_view_1.TerminalLog.Help.create);
                    _a.label = 3;
                case 3: return [2 /*return*/];
            }
        });
    });
}
/**
 * main_config
 *
 * @param {string} param
 */
function main_config(param) {
    return __awaiter(this, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = param;
                    switch (_a) {
                        case terminal_view_1.Options.ConfigItems.ts: return [3 /*break*/, 1];
                        case terminal_view_1.Options.ConfigItems.webpack: return [3 /*break*/, 3];
                        case terminal_view_1.Options.ConfigItems.git: return [3 /*break*/, 5];
                    }
                    return [3 /*break*/, 7];
                case 1: return [4 /*yield*/, __tsconfig__1.initTs_Config()];
                case 2:
                    _b.sent();
                    return [3 /*break*/, 8];
                case 3: return [4 /*yield*/, __webpackConfig__1.init_WebpackConfig()];
                case 4:
                    _b.sent();
                    return [3 /*break*/, 8];
                case 5: return [4 /*yield*/, __gitignore__1.init_gitignore()];
                case 6:
                    _b.sent();
                    return [3 /*break*/, 8];
                case 7:
                    saber_node_1.Terminal.Print.tips(terminal_view_1.TerminalLog.Help.config);
                    return [3 /*break*/, 8];
                case 8: return [2 /*return*/];
            }
        });
    });
}
// main
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var params;
        return __generator(this, function (_a) {
            process.on('exit', function () { return console.log('\n'); });
            params = process.argv.splice(2);
            if (params.length > 0) {
                if (params[0] === terminal_view_1.Options.Params.init) {
                    __init__1.init();
                }
                else if (params[0] === terminal_view_1.Options.Params.create) {
                    main_create(params[1]);
                }
                else if (params[0] === terminal_view_1.Options.Params.config) {
                    main_config(params[1]);
                }
            }
            else {
                saber_node_1.Terminal.Print.tips(terminal_view_1.TerminalLog.Hello);
            }
            return [2 /*return*/];
        });
    });
}
exports.main = main;
main();
