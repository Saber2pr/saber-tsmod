"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @Author: AK-12
 * @Date: 2019-01-13 13:14:13
 * @Last Modified by:   AK-12
 * @Last Modified time: 2019-01-13 13:14:13
 */
var path_config_1 = require("../../config/path.config");
/**
 * Options
 */
var Options;
(function (Options) {
    /**
     * Params
     *
     * @enum {number}
     */
    var Params;
    (function (Params) {
        Params["init"] = "init";
        Params["create"] = "create";
        Params["config"] = "config";
    })(Params = Options.Params || (Options.Params = {}));
    /**
     * ConfigItems
     *
     * @export
     * @enum {number}
     */
    var ConfigItems;
    (function (ConfigItems) {
        ConfigItems["ts"] = "ts";
        ConfigItems["webpack"] = "webpack";
    })(ConfigItems = Options.ConfigItems || (Options.ConfigItems = {}));
})(Options = exports.Options || (exports.Options = {}));
/**
 * Log
 */
var TerminalLog;
(function (TerminalLog) {
    var options = {
        init: 'init: init the project files.',
        create: 'create <module> : create a new ts module and its test file.',
        config: "config <option> : option is 'ts' , or 'webpack'.",
        config_ts: Options.ConfigItems.ts + " : create tsconfig.json",
        config_webpack: Options.ConfigItems.webpack + " : create webpack.config.js"
    };
    TerminalLog.Hello = "\n  ______________________________...\n  |\n  | += saber-tsmod v" + path_config_1.packageConfig.version + " =+\n  | Usage:\n  | \n  | " + options.init + "\n  | " + options.create + "\n  | " + options.config + "\n  |\n  |_____________________________...\n  ";
    var Help;
    (function (Help) {
        Help.create = "\n    ______________________________...\n    |\n    |" + options.create + "\n    |  you should set the name of module.\n    |_____________________________...\n\n    ";
        Help.config = "\n      ______________________________...\n      |choose a option\n      |\n      |1. " + options.config_ts + "\n      |2. " + options.config_webpack + "\n      |______________________________...\n    ";
    })(Help = TerminalLog.Help || (TerminalLog.Help = {}));
    var Status;
    (function (Status) {
        Status.modulePath = function (path) { return "\n    ______________________________...\n    |\n    | module create successfully in path:\n    |    " + path + "\n    |_____________________________...\n    "; };
    })(Status = TerminalLog.Status || (TerminalLog.Status = {}));
})(TerminalLog = exports.TerminalLog || (exports.TerminalLog = {}));
