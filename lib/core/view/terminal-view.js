"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @Author: AK-12
 * @Date: 2019-01-13 13:14:13
 * @Last Modified by: AK-12
 * @Last Modified time: 2019-01-15 22:27:42
 */
var version = '1.3.6';
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
        Params["egg"] = "saber2pr";
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
        ConfigItems["git"] = "git";
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
        config: "config <option> : option is 'ts' , 'webpack', or 'git'.",
        config_ts: Options.ConfigItems.ts + " : create tsconfig.json",
        config_webpack: Options.ConfigItems.webpack + " : create webpack.config.js",
        config_git: Options.ConfigItems.git + ": create .gitignore"
    };
    TerminalLog.Hello = "\n  ______________________________...\n  |\n  | += saber-tsmod v" + version + " =+\n  | Usage:\n  | \n  | " + options.init + "\n  | " + options.create + "\n  | " + options.config + "\n  |\n  |_____________________________...\n  ";
    var Help;
    (function (Help) {
        Help.create = "\n    ______________________________...\n    |\n    |" + options.create + "\n    |  you should set the name of module.\n    |_____________________________...\n\n    ";
        Help.config = "\n      ______________________________...\n      |choose a option:\n      |\n      |1. " + options.config_ts + "\n      |2. " + options.config_webpack + "\n      |3. " + options.config_git + "\n      |______________________________...\n    ";
    })(Help = TerminalLog.Help || (TerminalLog.Help = {}));
    var Status;
    (function (Status) {
        Status.modulePath = function (path) { return "\n    ______________________________...\n    |\n    | module create successfully in path:\n    |    " + path + "\n    |_____________________________...\n    "; };
    })(Status = TerminalLog.Status || (TerminalLog.Status = {}));
})(TerminalLog = exports.TerminalLog || (exports.TerminalLog = {}));
