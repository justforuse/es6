## Creating a Plugin

There are two types of plugins in SystemJS:

* [Instantiation plugins](#instantiation-plugins)
* [Compiler plugins](#compiler-plugins)

Instantiation plugins are plugins that run in production that allow custom resources that aren't otherwise modules to be loaded as modules.
Examples of this are loading CSS, Webfonts or JSON resources.

Compiler plugins are plugins that allow loading new languages through SystemJS compiling their sources into ES modules. These plugins
should be precompiled for production environments and include use cases such as templates or other languages.

### Instantiation plugins

As of SystemJS 0.20, instantiation plugins are modules with a `default` export function providing the module value:

plugin.js
```javascript
export default function (url) {
  return Promise.resolve({
    some: 'value'
  });
}
```

Which can be used via:

```javascript
import { some } from 'test!./plugin.js';
assert(some === 'value'); // ok
```

Within this hook, plugins can fetch `key` as a source text, or do any other custom work necessary to output a valid module object. If no return value
is provided, an empty module is used for the plugin module value.

Within the `load` hook `this` is set to the loader itself. It is also possible to call `loader.register(key, deps, declare)` to instantiate the module
in the plugin load hook. Because plugins are referenced via syntax (`resource!plugin`) it is necessary to use the corresponding `registerKey` argument here:

```javascript
export default function (url, registerKey) {
  this.register(registerKey, deps, function (_export, _context) {
    // ... System.register format ...
  });
}
```

> For SystemJS 0.19 and below, instantiation plugins must use the `instantiate` hook API form from the compiler plugins section below.

#### Sample CSS Plugin

A CSS loading plugin can be written:

css.js:
```javascript
module.exports = function (url) {
  return new Promise(function (resolve, reject) {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = url;
    link.onload = resolve;

    document.head.appendChild(link);
  });
}
```

### Compiler plugins

The hooks compiler plugins can override are `locate`, `fetch`, `translate` and `instantiate`.

The behaviors of the hooks are:

* Locate: Overrides the location of the plugin resource
* Fetch: Called with third argument representing default fetch function, has full control of fetch output.
* Translate: Returns the translated source from `load.source`, can also set `load.metadata.sourceMap` for full source maps support.
* Instantiate: Providing this hook as a promise or function allows the plugin to hook instantiate. Any return value becomes the defined custom module object for the plugin call.

#### Sample CoffeeScript Plugin

For example, we can write a CoffeeScript plugin with the following:

coffee.js:
```javascript
var CoffeeScript = require('coffeescript');

exports.translate = function (load) {
  // optionally also set the sourceMap to support both builds and in-browser transpilation
  // load.metadata.sourceMap = generatedSourceMap;
  return CoffeeScript.compile(load.source);
}
```

```javascript
  System.import('app/main.coffee!coffee.js').then(function(main) {
    // main is now loaded from CoffeeScript
  });
```
