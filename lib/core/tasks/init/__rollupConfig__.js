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
 * @Date: 2019-01-26 19:37:42
 * @Last Modified by: AK-12
 * @Last Modified time: 2019-01-26 20:22:51
 */
var createf_1 = require("../../utils/createf");
var path_config_1 = require("../../../config/path.config");
var rollup_1 = require("../../template/rollup");
var reload_1 = require("../../utils/reload");
var rule_1 = require("../../utils/rule");
var print_1 = require("../../utils/print");
function init_rollupConfig() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, createf_1.createf(path_config_1.path_rollupConfig, rollup_1.rollupConfig)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, reload_1.reloadPackage(function (packageData) {
                            if (rule_1.Rule.isUndefined(packageData.scripts.dev)) {
                                packageData.scripts.dev = 'rollup -c --watch';
                            }
                            else {
                                print_1.Fail.Package.Existed.script('dev');
                            }
                            if (rule_1.Rule.isUndefined(packageData.devDependencies.rollup)) {
                                packageData.devDependencies.rollup = '^1.1.2';
                                packageData.devDependencies['rollup-plugin-commonjs'] = '^9.2.0';
                                packageData.devDependencies['rollup-plugin-node-resolve'] = '^4.0.0';
                            }
                            else {
                                print_1.Fail.Package.Existed.devDependencie('rollup');
                            }
                            return packageData;
                        })];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.init_rollupConfig = init_rollupConfig;