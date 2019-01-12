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
 * @Last Modified time: 2019-01-12 17:23:51
 */
var __tsmod__1 = require("./tasks/__tsmod__");
var __init__1 = require("./tasks/__init__");
/**
 * Params
 *
 * @enum {number}
 */
var Params;
(function (Params) {
    Params["init"] = "init";
    Params["create"] = "create";
})(Params || (Params = {}));
/**
 * Log
 */
var TerminalLog;
(function (TerminalLog) {
    TerminalLog.Hello = "\n  ______________________________...\n  |\n  | += saber-tsmod =+\n  | Usage:\n  | \n  | init: init the project files.\n  | create <module> : create a new ts module and its test file.\n  |\n  |_____________________________...\n  ";
    var Help;
    (function (Help) {
        Help.create = "\n    ______________________________...\n    |\n    |create <module> : create a new ts module and its test file.\n    |  you should set the name of module.\n    |_____________________________...\n\n    ";
    })(Help = TerminalLog.Help || (TerminalLog.Help = {}));
    var Status;
    (function (Status) {
        Status.modulePath = function (path) { return "\n    ______________________________...\n    |\n    | module create successfully in path:\n    |    " + path + "\n    |_____________________________...\n    "; };
    })(Status = TerminalLog.Status || (TerminalLog.Status = {}));
})(TerminalLog || (TerminalLog = {}));
// main
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var params, res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    params = process.argv.splice(2);
                    if (!(params.length > 0)) return [3 /*break*/, 5];
                    if (!(params[0] === Params.init)) return [3 /*break*/, 1];
                    __init__1.init();
                    return [3 /*break*/, 4];
                case 1:
                    if (!(params[0] === Params.create)) return [3 /*break*/, 4];
                    if (!(typeof params[1] !== 'undefined')) return [3 /*break*/, 3];
                    return [4 /*yield*/, __tsmod__1.createModuleFile(params[1])];
                case 2:
                    res = _a.sent();
                    console.log(TerminalLog.Status.modulePath(res));
                    return [3 /*break*/, 4];
                case 3:
                    console.log(TerminalLog.Help.create);
                    _a.label = 4;
                case 4: return [3 /*break*/, 6];
                case 5:
                    console.log(TerminalLog.Hello);
                    _a.label = 6;
                case 6: return [2 /*return*/];
            }
        });
    });
}
exports.main = main;
main();
