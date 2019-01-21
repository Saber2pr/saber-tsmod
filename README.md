# saber-tsmod

[![types](https://img.shields.io/npm/types/saber-tsmod.svg)](https://github.com/Microsoft/TypeScript)
[![version](https://img.shields.io/npm/v/saber-tsmod.svg)](https://www.npmjs.com/package/saber-tsmod)
[![license](https://img.shields.io/npm/l/saber-tsmod.svg)](https://github.com/Saber2pr/saber-tsmod/blob/master/LICENSE)
[![github](https://img.shields.io/badge/github-saber2pr-blue.svg)](https://github.com/Saber2pr/saber-tsmod)

> a cli for ts dev.

> publish your ts module to npm!

```bash
npm install saber-tsmod -g
```

## Usage:

1. init: init the project files.

2. create `<module>`: create a new ts module file and its test file.

3. config `<option>`: create config file of typescript or webpack.

---

```bash
# create workspace
mkdir <projectFolder>

cd <projectFolder>

# init project.
saber-tsmod init

# create module and test file.
saber-tsmod create <module>

# for example:
saber-tsmod create hello

saber-tsmod create shop/shop.service
saber-tsmod create shop/shop.controller
saber-tsmod create shop/shop.module

# create config file
# tsconfig.json
saber-tsmod config ts
# webpack.config.json
saber-tsmod config webpack

```

---

## start

```bash
# install the typescript and webpack.
npm install
```

```bash
# auto compile to commonjs.
npm start

# auto compile to es5.
npm run dev

```

## Author: saber2pr(AK-12)

---

## develope and test

> you should write ts in /src

> ts -(tsc)-> commonjs -(webpack)-> es5

> you should make test in /src/test

> export your core in /src/index.ts!

---

## publish

> Before publish, there are some items in package.json should to be updated below:

1. name
2. version
3. description
4. repository(url)
5. author

```bash
# if all is well, try:
npm publish
```
