# Let's add Typescript

Something we haven't seen in the [typescript workshop](https://github.com/beuted/typescript-workshop) is how to organise a project
with different typescript files (because obviously we are not going to put all these classes in one file)

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

## Typing of external libraries

External libraries we are using are still written in javascript. Fortunately there is a way to add typing to this libraries, it's `.d.ts` files.
The way we can import them, so that Typescript is aware of them, is simply by registering them in npm `package.json`.

```
$ npm install --save-dev @types/angular
$ npm install --save-dev @types/angular-ui-router
$ npm install --save-dev @types/angular-mocks
$ npm install --save-dev @types/jasmine
$ npm install --save-dev @types/webpack
$ npm install --save-dev @types/webpack-env
```

After doing that your IDE should start should much less red but compilation will still fail

## Fixing the imports

TODO

New dependencies are needed.

## Enforcing types

Let's go full types and enforce Explicite typing everywhere. In tsconfig.json change `"noImplicitAny": false` to `"noImplicitAny": true` and see what happens.

# Workshop

## Setting up the app locally
* [Install node](https://nodejs.org)
* run `$ npm install`

## Commands
* Run app for local development: `$ npm run dev`
* Build for production: `$ npm run build`
* Run unit-tests: `$ npm run test`
* Run unit-tests for local development: `$ npm run test:live`

## When your app is working fine:

**TODO**

1. Adapt your previous code with the new ES6 way of writing dependencies
2. 
3. Go in the typescript configuration file `tsconfig.json` at the root of the project and change `noImplicitAny` to `true`, try fixing the build.
4. 
