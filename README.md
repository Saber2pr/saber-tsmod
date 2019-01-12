# saber-tsmod

> a cli for ts dev.

> publish your ts module to npm!

```bash
npm install saber-tsmod -g
```

## Usage:

```bash
# init project.
saber-tsmod init

# create module and test file.
saber-tsmod create <module>
```

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

## develope and test

> you should write ts in /src

> ts -(tsc)-> commonjs -(webpack)-> es5

> you should make test in /src/test

> export your core in /src/index.ts!

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
