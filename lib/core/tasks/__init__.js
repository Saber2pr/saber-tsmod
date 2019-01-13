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
 * @Date: 2019-01-12 17:02:13
 * @Last Modified by: AK-12
 * @Last Modified time: 2019-01-13 23:16:09
 */
var saber_node_1 = require("saber-node");
var __package__1 = require("./init/__package__");
var __html__1 = require("./init/__html__");
var __readme__1 = require("./init/__readme__");
var __tsconfig__1 = require("./init/__tsconfig__");
var __webpackConfig__1 = require("./init/__webpackConfig__");
var __gitignore__1 = require("./init/__gitignore__");
/**
 * init
 *
 * @export
 */
function init() {
    return __awaiter(this, void 0, void 0, function () {
        var name, description, repository, author, packageInfor, isInit_webpack;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, saber_node_1.Terminal.getUserInput('Package name: ')];
                case 1:
                    name = _a.sent();
                    return [4 /*yield*/, saber_node_1.Terminal.getUserInput('description: ')];
                case 2:
                    description = _a.sent();
                    return [4 /*yield*/, saber_node_1.Terminal.getUserInput('repository(git): ')];
                case 3:
                    repository = _a.sent();
                    return [4 /*yield*/, saber_node_1.Terminal.getUserInput('author: ')];
                case 4:
                    author = _a.sent();
                    if (!name) {
                        console.log("--- init failed ---");
                        return [2 /*return*/];
                    }
                    packageInfor = {
                        name: name,
                        description: description,
                        repository: repository,
                        author: author
                    };
                    // resolve
                    return [4 /*yield*/, __package__1.init_PackageJson(packageInfor)];
                case 5:
                    // resolve
                    _a.sent();
                    return [4 /*yield*/, __html__1.init_Html(packageInfor)];
                case 6:
                    _a.sent();
                    return [4 /*yield*/, __readme__1.init_ReadMe(packageInfor)];
                case 7:
                    _a.sent();
                    return [4 /*yield*/, __tsconfig__1.initTs_Config()];
                case 8:
                    _a.sent();
                    return [4 /*yield*/, saber_node_1.Terminal.getUserInput('config webpack?(y/n): ')];
                case 9:
                    isInit_webpack = _a.sent();
                    if (!(isInit_webpack === 'y')) return [3 /*break*/, 11];
                    return [4 /*yield*/, __webpackConfig__1.init_WebpackConfig()];
                case 10:
                    _a.sent();
                    _a.label = 11;
                case 11: return [4 /*yield*/, __gitignore__1.init_gitignore()];
                case 12:
                    _a.sent();
                    console.log("--- init successfully ---");
                    return [2 /*return*/];
            }
        });
    });
}
exports.init = init;
