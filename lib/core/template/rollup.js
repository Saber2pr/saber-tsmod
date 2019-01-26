"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @Author: AK-12
 * @Date: 2019-01-26 19:16:41
 * @Last Modified by:   AK-12
 * @Last Modified time: 2019-01-26 19:16:41
 */
exports.rollupConfig = "import resolve from 'rollup-plugin-node-resolve'\nimport commonjs from 'rollup-plugin-commonjs'\n\nexport default {\n  input: './lib/test/test.js',\n  output: {\n    file: 'build/bundle.js',\n    format: 'cjs'\n  },\n  watch: {\n    include: 'lib/**'\n  },\n  plugins: [resolve(), commonjs()]\n}";
