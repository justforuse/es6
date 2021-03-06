### Compiling Modules into a Bundle

[SystemJS builder](https://github.com/systemjs/builder) provides comprehensive support for compiling all
module formats into a single bundle in a way that supports
[circular references and zebra-striping](https://github.com/ModuleLoader/es6-module-loader/blob/v0.17.0/docs/circular-references-bindings.md).

It also offers the ability to [create statically optimized modules](https://github.com/systemjs/builder#self-executing-sfx-bundles)
that can run without needing SystemJS present.

### Loading Bundles

We include the bundle generated by SystemJS builder with a script tag before importing the module we want to import:

```html
<script src="system.js"></script>
<script src="system-config.js"></script>
<script src="bundle.js"></script>
<script>
  System.import('module-from-bundle');
</script>
```

We can import the bundle itself via `System.import`, but then need to nest the import statements for the code to work properly:

```javascript
System.import('/bundle.js').then(function (m) {
  // (the bundle itself is an empty module m)
  return System.import('module-from-bundle');
})
```

### Bundle Extension

It can be useful to load bundles of code on-demand for chunked loading.

The `bundles` configuration allows determining which modules to load from which bundle:

```javascript
  // the bundle at build/core.js contains these modules
  System.config({
    bundles: {
      'build/core': ['jquery', 'app/app', 'app/dep', 'lib/third-party']
    }
  });

  // when we load 'app/app' the bundle extension interrupts the loading process
  // and ensures that build/core.js is loaded first
  System.import('app/app');

  // this way a request to any one of 'jquery', 'app/app', 'app/dep', 'lib/third-party'
  // will delegate to the bundle and only a single request is made
```

A built file must contain the exact named defines or named `System.register` statements for the modules
it contains. Mismatched names will result in separate requests still being made.

Typically we only want the `bundles` config for lazy-loaded code.

### DepCache

An alternative to bundling into a single bundle is to leave files as separate for loading in production.

The depcache extension allows specifying the dependencies of all modules upfront through configuration so that loads can
happen in parallel.

```javascript
System.config({
  depCache: {
    'moduleA': ['moduleB'], // moduleA depends on moduleB
    'moduleB': ['moduleC']  // moduleB depends on moduleC
  }
});

// when we do this import, depCache knows we also need moduleB and moduleC,
// it then directly requests those modules as well as soon as we request moduleA
System.import('moduleA')
```

Over HTTP/2 this approach may be preferable as it allows files to be individually cached in the browser meaning bundle
optimizations are no longer a concern.
