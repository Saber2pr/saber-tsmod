"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @Author: AK-12
 * @Date: 2019-01-20 07:04:42
 * @Last Modified by: AK-12
 * @Last Modified time: 2019-01-20 07:07:09
 */
var Rule;
(function (Rule) {
    Rule.isUndefined = function (obj) {
        return typeof obj === 'undefined';
    };
})(Rule = exports.Rule || (exports.Rule = {}));
var Name;
(function (Name) {
    Name.reset = function (name) { return name.replace(/\-|\./g, '_'); };
})(Name = exports.Name || (exports.Name = {}));
