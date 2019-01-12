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
 * @Date: 2019-01-12 17:18:56
 * @Last Modified by:   AK-12
 * @Last Modified time: 2019-01-12 17:18:56
 */
var saber_node_1 = require("saber-node");
/**
 * initReadMe
 *
 * @export
 * @param {IPackageInfor} packageInfor
 */
function initReadMe(packageInfor) {
    return __awaiter(this, void 0, void 0, function () {
        var name, description, repository, author, readme, readme_content;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    name = packageInfor.name, description = packageInfor.description, repository = packageInfor.repository, author = packageInfor.author;
                    readme = './README.md';
                    readme_content = "# " + name + "\n\n  > " + description + "\n  \n  ```bash\n  # from npm\n  npm install " + name + "\n  \n  # from github\n  git clone " + repository + "\n  ```\n  \n  ## start\n  \n  ```bash\n  # install the typescript and webpack\n  npm install\n  ```\n  \n  ```bash\n  # init package\n  npm run init\n  \n  # create new module file\n  npm run new-mod\n  \n  # auto compile to commonjs\n  npm start\n  \n  # auto compile to es5\n  npm run dev\n  \n  ```\n\n  > Author: " + author + "\n  \n  ## develope and test\n  \n  > you should write ts in /src\n  \n  > ts -(tsc)-> commonjs -(webpack)-> es5\n  \n  > you should make test in /src/test\n  \n  > export your core in /src/index.ts!\n  \n  ## publish\n  \n  > Before publish, there are some items in package.json should to be updated below:\n  \n  1. name\n  2. version\n  3. description\n  4. repository(url)\n  5. author\n  \n  ```bash\n  # if all is well, try:\n  npm publish\n  ```\n  \n  ";
                    return [4 /*yield*/, saber_node_1.File.createFile(readme, readme_content)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.initReadMe = initReadMe;
