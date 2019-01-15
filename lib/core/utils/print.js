"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @Author: AK-12
 * @Date: 2019-01-15 12:42:56
 * @Last Modified by: AK-12
 * @Last Modified time: 2019-01-15 13:30:43
 */
var saber_node_1 = require("saber-node");
/**
 * Success
 * @exports
 */
var Success;
(function (Success) {
    var Task;
    (function (Task) {
        Task.initSuccessfully = function () {
            return saber_node_1.Terminal.Print.success('--- init successfully ---');
        };
    })(Task = Success.Task || (Success.Task = {}));
})(Success = exports.Success || (exports.Success = {}));
/**
 * Error
 * @exports
 */
var Fail;
(function (Fail) {
    var Task;
    (function (Task) {
        Task.initFail = function (type) {
            saber_node_1.Terminal.Print.error('--- init failed ---');
            saber_node_1.Terminal.Print.error(type);
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
