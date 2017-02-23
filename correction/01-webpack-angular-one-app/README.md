# Angular 1 and webpack

After looking around and explaining what all this ugly configuration is for, we are going to transform this application from JS to TS progressively.

## Adding webpack

[Webpack](https://webpack.github.io) is a module bundler that support es6 syntax imports. Webpack can only process JavaScript natively,
but loaders are used to transform other resources into JavaScript. By doing so, **every resource forms a module.**

Webpack will handle for us the dependency resolution and bundle all the js files **in the right order** based on there ES6 imports

The main entry point for all

## Modifying karma configuration

```
    preprocessors: {
      // Reference: http://webpack.github.io/docs/testing.html
      // Reference: https://github.com/webpack/karma-webpack
      // Convert files with webpack and load sourcemaps
      'src/tests.webpack.js': ['webpack', 'sourcemap']
    },
```

## Jasmine Unit tests


## Used another way to do the $inject


# Workshop

## Setting up the app locally
* [Install node](https://nodejs.org)
* run `$ npm install`

## Commands
* Run app for local development: `$ npm run dev`
* Build for production: `$ npm run build`
* Run unit-tests: `$ npm run test`
* Run unit-tests for local development: `$ npm run test:live`

## When your app is working fine


1. Try to add the dependencies
2. blabla TODO!!!
