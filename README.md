# debug-flags

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
