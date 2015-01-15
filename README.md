debug-flags [![NPM version][npm-image]][npm-link] [![Build Status][build-image]][build-link]
===========

[![Development Dependency status][devdeps-image]][devdeps-link]

Easy way to check the environment variable `NODE_DEBUG` for the presence of the nested flags.

## Install

```console
$ npm install --save debug-flags
```

## Usage example

```javascript
// suppose NODE_DEBUG="app lib:func"
var isDebugEnabled = require('debug-flags');

isDebugEnabled('app'); // => true
isDebugEnabled('app:something:nested'); // => true
isDebugEnabled('flag'); // => false
isDebugEnabled('lib'); // => false
isDebugEnabled('lib:func'); // => true
isDebugEnabled('lib:func:xxx'); // => true
```

Have fun!

[npm-image]: https://img.shields.io/npm/v/debug-flags.svg?style=flat
[npm-link]: https://npmjs.org/package/debug-flags
[build-image]: https://img.shields.io/travis/nodules/debug-flags.svg?style=flat
[build-link]: https://travis-ci.org/nodules/debug-flags
[devdeps-image]: https://img.shields.io/david/dev/nodules/debug-flags.svg?style=flat
[devdeps-link]: https://david-dm.org/nodules/debug-flags#info=devDependencies
