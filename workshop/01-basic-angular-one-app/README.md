# Let's add Typescript

## tsconfig.json

```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "moduleResolution": "node",
    "sourceMap": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "lib": ["es2015", "dom"],
    "noImplicitAny": false,
    "suppressImplicitAnyIndexErrors": true
  }
}
```

## webpack.make.js

First, let's modify the config of the previous app with the typescript loader.

```js
config.module = {
    preLoaders: [],
    loaders: [{
      // TS LOADER
      // Reference: https://github.com/s-panferov/awesome-typescript-loader
      // Transpile .ts files using awesome-typescript-loader
      // Compiles Typescript into ES5 code
      test: /\.ts$/,
      loader: 'awesome-typescript-loader',
      options: { configFileName: findAbsolutePath('src', 'tsconfig.json') }
    } /*...*/
};
```

The findAbsolutePath helper is just there to help us find the absolute path to tsconfig.json to avoid surprises on different environments

```js
// helper functions
var path = require('path');
var _root = path.resolve(__dirname, '..');
function findAbsolutePath(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [_root].concat(args));
}
```

Let webpack know that we need to take into account typescript files:
```js
  config.resolve = {
      extensions: [ '', '.js', '.ts' ]
  }
```

## node packages

We now need to import several typing modules in order to be able to use typing for dependency libraries

```
$ npm install --save-dev @types/angular
$ npm install --save-dev @types/angular-ui-router
$ npm install --save-dev @types/angular-mocks
$ npm install --save-dev @types/jasmine
$ npm install --save-dev @types/webpack
$ npm install --save-dev @types/webpack-env

```


## Fixing the imports

TODO

## Enforcing types

Let's go full types and enforce Explicite typing everywhere. In tsconfig.json change `"noImplicitAny": false` to `"noImplicitAny": true` and see what happens.

