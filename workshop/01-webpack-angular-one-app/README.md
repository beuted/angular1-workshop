# Angular 1 and webpack

After looking around and explaining what all this ugly configuration is for, we are going to transform this application from JS to TS progressively.

## Adding webpack

[Webpack](https://webpack.github.io) is a module bundler that support es6 syntax imports. Webpack can only process JavaScript natively,
but loaders are used to transform other resources into JavaScript. By doing so, **every resource forms a module.**

Webpack will handle for us the dependency resolution and bundle all the js files **in the right order** based on there ES6 imports

The main entry point for webpack will be our `app.js` file, from here webpack will find all the dependencies the app needs and bundle them in a single js file.

This means we don't have to do the dependency resolution ourself in the `index.html` webpack will taker care of it. Instead we will tell webpack on which files we depends on the top of each files.

> example of the transformation of `services/module.js` and `services/randomNames.service.js` with webpack dependencies
> 
> ```js
> // services/randomNames.service.js
> var angular = require('angular');
> 
> var RandomNamesService = function($http) {
>   this.getName = function(characterId) {
>     return $http.get('http://swapi.co/api/people/' + characterId)
>       .then(function(res) {
>         return res.data.name;
>       }).catch(function(err){
>         return err.data;
>       });
>   }
> 
>   return this;
> }
> 
> module.exports = RandomNamesService;
> ```
>
> ```js
> // services/module.js
> var angular = require('angular');
> var RandomNamesService = require('./randomNames.service');
> 
> var ServicesModuleName = angular.module('services', [])
>   .service('randomNames', RandomNamesService)
>   .name;
> 
> module.exports = ServicesModuleName;
> ```

This is starting to look a bit more like a decent language!

The mechanism is quite simple: each files ends with a : `module.exports = TheObjectWhereIWantToExport`, this object can be anything.
Then, in another file if we want to get this object we simply do `var TheObjectWhereIWantToExport = require('./my-file');` where `./my-file` is the relative location
of the file we want to import **minus the .js extension**.

And if we need to import an external librarie, we install it with `npm` and just call it the same way in an absolute fashion: `var angular = require('angular');`

> ⚠️️ Webpack dependencies looking like `var toto = require('./toto');` are different from the angular dependencies we saw before, between modules or controllers and services!

## Another way to do the angular dependency injection: $inject

**TODO**: If we have time

# Workshop

## Setting up the app locally
* [Install node](https://nodejs.org)
* run `$ npm install`

## Commands
* Run app for local development: `$ npm run dev`
* Build for production: `$ npm run build`
* Run unit-tests: `$ npm run test`
* Run unit-tests for local development: `$ npm run test:live`

## Exercise
1. Try to add the webpack dependencies to different files to make it compile
