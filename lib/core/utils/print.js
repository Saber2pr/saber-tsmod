"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @Author: AK-12
 * @Date: 2019-01-15 12:42:56
 * @Last Modified by: AK-12
 * @Last Modified time: 2019-01-26 20:25:59
 */
var saber_node_1 = require("saber-node");
var terminal_view_1 = require("../view/terminal-view");
var path_config_1 = require("../../config/path.config");
/**
 * Success
 * @exports
 */
var Success;
(function (Success) {
    var Task;
    (function (Task) {
        Task.successfully = function (taskName, message) {
            saber_node_1.Terminal.Print.tips("--- init " + taskName + " successfully ---");
            if (message) {
                saber_node_1.Terminal.Print.success(message);
            }
        };
        Task.createSuccessfully = function (filePath) {
            return saber_node_1.Terminal.Print.success(terminal_view_1.TerminalLog.Status.modulePath(filePath));
        };
    })(Task = Success.Task || (Success.Task = {}));
})(Success = exports.Success || (exports.Success = {}));
/**
 * Error
 * @exports
 */
var Fail;
(function (Fail) {
    var Find;
    (function (Find) {
        Find.noTsmodFile = function () {
            return saber_node_1.Terminal.Print.error("cannot found tsmod.json: " + path_config_1.path_tsmod);
        };
    })(Find = Fail.Find || (Fail.Find = {}));
    var Task;
    (function (Task) {
        Task.initFail = function (type) {
            saber_node_1.Terminal.Print.error('--- init failed ---');
            saber_node_1.Terminal.Print.error(type);
        };
        Task.configFail = function (type) {
            saber_node_1.Terminal.Print.error('--- config failed ---');
            saber_node_1.Terminal.Print.error(type);
        };
        Task.createFail = function (name) {
            return saber_node_1.Terminal.Print.error("module '" + name + "' is existed!");
        };
    })(Task = Fail.Task || (Fail.Task = {}));
    var Package;
    (function (Package) {
        var Existed;
        (function (Existed) {
            /**
             * script
             * @param scriptName
             */
            Existed.script = function (scriptName) {
                return saber_node_1.Terminal.Print.error("the scripts '" + scriptName + "' of 'package.json' is existed!");
            };
            /**
             * devDependencie
             * @param devDependenceName
             */
            Existed.devDependencie = function (devDependenceName) {
                return saber_node_1.Terminal.Print.error("the devDependence '" + devDependenceName + "'  of 'package.json' is existed!");
            };
        })(Existed = Package.Existed || (Package.Existed = {}));
    })(Package = Fail.Package || (Fail.Package = {}));
})(Fail = exports.Fail || (exports.Fail = {}));
