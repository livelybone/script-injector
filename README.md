# @livelybone/script-injector
[![NPM Version](http://img.shields.io/npm/v/@livelybone/script-injector.svg?style=flat-square)](https://www.npmjs.com/package/@livelybone/script-injector)
[![Download Month](http://img.shields.io/npm/dm/@livelybone/script-injector.svg?style=flat-square)](https://www.npmjs.com/package/@livelybone/script-injector)
![gzip with dependencies: kb](https://img.shields.io/badge/gzip--with--dependencies-kb-brightgreen.svg "gzip with dependencies: kb")
![typescript](https://img.shields.io/badge/typescript-supported-blue.svg "typescript")
![pkg.module](https://img.shields.io/badge/pkg.module-supported-blue.svg "pkg.module")

> `pkg.module supported`, which means that you can apply tree-shaking in you project

[中文文档](./README-CN.md)

A module for script dynamic injection

## repository
git@github.com:livelybone/script-injector.git

## Demo
https://github.com/livelybone/script-injector

## Run Example
you can see the usage by run the example of the module, here is the step:

1. Clone the library `git clone git@github.com:livelybone/script-injector.git`
2. Go to the directory `cd [the-module-directory]`
3. Install npm dependencies `npm i`(use taobao registry: `npm i --registry=http://registry.npm.taobao.org`)
4. Open service `npm run dev`
5. See the example(usually is `http://127.0.0.1:3000/examples/test.html`) in your browser

## Installation
```bash
npm i -S @livelybone/script-injector
```

## Global name - The variable the module exported in `umd` bundle
`ScriptInjector`

## Interface
See what method or params you can use in [index.d.ts](./index.d.ts)

## Usage
```js
import * as ScriptInjector from '@livelybone/script-injector'

ScriptInjector.inject('alert("1")')

ScriptInjector.inject('body { background: #000 }', { type: 'css' })
```

## CDN
Use in html, see what you can use in [CDN: unpkg](https://unpkg.com/@livelybone/script-injector/lib/umd/)
```html
<-- use what you want -->
<script src="https://unpkg.com/@livelybone/script-injector/lib/umd/<--module-->.js"></script>
```

Or，see what you can use in [CDN: jsdelivr](https://cdn.jsdelivr.net/npm/@livelybone/script-injector/lib/umd/)
```html
<script src="https://cdn.jsdelivr.net/npm/@livelybone/script-injector/lib/umd/<--module-->.js"></script>
```
