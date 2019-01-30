"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @Author: AK-12
 * @Date: 2019-01-26 19:16:41
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-01-30 19:15:47
 */
exports.rollupConfig = "import resolve from 'rollup-plugin-node-resolve'\nimport commonjs from 'rollup-plugin-commonjs'\nconst packageJson = require(`${process.cwd()}/package.json`)\n\nexport default {\n  input: './lib/test/test.js',\n  output: {\n    file: 'build/bundle.js',\n    format: 'iife',\n    name: packageJson.name\n  },\n  watch: {\n    include: 'lib/**'\n  },\n  plugins: [resolve(), commonjs()]\n}";
