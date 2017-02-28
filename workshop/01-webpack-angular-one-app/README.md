# Angular 1 and webpack

After quickly looking around and explaining what all this ugly configuration is for, we are going to transform this application from JS to TS progressively.

## Adding webpack

[Webpack](https://webpack.github.io) is a module bundler that will help us get rid off all the manual dependency resolution.

Webpack can only process JavaScript natively, but loaders are used to transform other resources into JavaScript. By doing so, **every resource forms a module.** (css, html templates etc..)

Webpack will handle for us the dependency resolution and bundle all the js files **in the right order** based on dependencies definitions he will find in files. 

The main entry point for webpack will be our `app.js` file, from here webpack will find all the dependencies the app needs, and bundle them in a single js file.

This means we don't have to do the dependency resolution ourself in the `index.html` webpack will taker care of it. Instead we will tell webpack on which files we depends on the top of each files.

> example of the transformation of `services/module.js` and `services/randomNames.service.js` with webpack dependencies
> 
> ```js
> // services/randomNames.service.js
> var randomNameService = function ($http) {
>      this.getName = function() {
>         var characterId = Math.floor(Math.random() * (87 - 1)) + 1;
>         
>         return $http.get('http://swapi.co/api/people/' + characterId)
>             .then(function(res) {
>                 return res.data.name;
>             }).catch(function(err){
>                 return err.data;
>             });
>      }
> }
> 
> module.exports = randomNameService;
> ```
>
> ```js
> // services/module.js
> var angular = require('angular');
> var randomNameService = require('./randomName.service');
> 
> angular.module('app.services', [])
>     .service('randomName-service', ['$http', randomNameService]);
> ```

This is starting to look a bit more like a decent language!

The mechanism is quite simple: each files ends with a : `module.exports = TheObjectWhereIWantToExport`, this object can be anything.
Then, in another file if we want to get this object we simply do `var TheObjectWhereIWantToExport = require('./my-file');` where `./my-file` is the relative location
of the file we want to import **minus the .js extension**.

And if we need to import an external library, we install it with `npm` and just call it the same way in an absolute fashion: `var angular = require('angular');`

> ⚠️️ Webpack dependencies looking like `var toto = require('./toto');` are different from the angular dependencies we saw before, between modules or controllers and services!

**WORKSHOP: Exercise 1**

## Another way to do the angular dependency injection: $inject

At this point you probably figured that angular 1 has **A LOT** of boiler-plate, one of the most annoying boiler-plate is having to constantly name the services you are importing in controller and services.
And then declare it in the function arguments again, **in different files!**

> ```js
> // services/randomNames.service.js
> var randomNameService = function ($http) {
>     ...
> }
> 
> module.exports = randomNameService;
> ```
>
> ```js
> // services/module.js
> var angular = require('angular');
> var randomNameService = require('./randomName.service');
> 
> angular.module('app.services', [])
>     .service('randomName-service', ['$http', randomNameService]);
> ```

Here it's quite easy to forget the second `"$http"` inside the `.service` declaration.

Another way you can do this to at least have it in a single file is the `$inject` object, this way:

> ```js
> // services/randomNames.service.js
> var randomNameService = function ($http /*, ...*/) {
>     //...
> }
>
> randomNameService.$inject = ["$http" /*, ... */];
> 
> module.exports = randomNameService;
> ```
>
> ```js
> // services/module.js
> var angular = require('angular');
> var randomNameService = require('./randomName.service');
> 
> angular.module('app.services', [])
>     .service('randomName-service', randomNameService);
> ```

**WORKSHOP: Exercise 2**

## Exporting modules names

Last thing We can improve on this javascript version of our application is the webpack-import of modules.
If you look at `app.js` right now you should see something like this.

```js
var angular = require('angular');
var angularUi = require('angular-ui-router');

var appHome = require('./home/module');
var appServices = require('./services/module');

var homeTemplate = require('./home/home.html');

angular.module('app', ['app.home', 'app.services', 'ui.router'])
  //...
```

Two things annoy me here:
1. First, how can I ensure that I'm not going to do a typo on these angular modules names ?
2. Second, how do I know that I have to import the modules if I don't even need to use the variables I'm importing ? (appHome, appServices, ...)

A good way to solve these two issues is to **export module names at the end of there file**.

This way `app.service.js` becomes:

```js
var randomNameService = require('./randomName.service');

var serviceModule = angular.module('app.services', [])
    .service('randomName-service', randomNameService);

module.exports = serviceModule.name;
```

and `app.js` becomes:

```js
var angular = require('angular');
var angularUi = require('angular-ui-router');

var appHome = require('./home/module');
var appServicesName = require('./services/module');

var homeTemplate = require('./home/home.html');

angular.module('app', ['app.home', appServicesName, 'ui.router'])
```

**WORKSHOP: Exercise 3**

> See WORKSHOP.md for workshop exercice