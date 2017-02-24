# Plain ES5 Angular 1 App

This will be our starting point. This project main technologies are:
* `npm` to load our development dependencies only
* `angular` the js framework on top of wich we are going to build our app
* `jasmine` the test-framework we are going to use to for unit-testing 

## Angular Organisation & Dependencies

The 3 main parts you will encounter in an Angular App are:

* **Services**: Should be used to share code accross your app.
* **Controller**: Should be used purely to wire up services, dependencies and other objects, and assign them to the view.
* **Directives**: Should be used to define reusable component that can be included in view.

An angular app is usually organized around several **modules**, a module will contains **Services**, **Controller** and **Directives**.

```js
angular.module('My_Module', [])
  .service('My_Service', function() {/* service implementation ...*/})
  .directive('My_Directive', function() {/* directive implementation ...*/})
  .controller('My_Controller', function() {/* controller implementation ...*/});
```

These modules also configure the dependency injector.
So if `Module_A` needs a Service that is included in `Module_B`, `Module_A` will simply declare `Module_B` in its dependency at initialization.

```js
angular.module('Module_A', ['Module_B', 'Other_Module', /* ... */]);
```

The same dependency mecanism can be found inside modules at the `service`, `directive` and `controller` level.

```js
angular.module('My_Module', [])
  .service('My_Service', function() {/*...*/})
  .controller('My_Controller', ['My_Service', function(MyService) {/*...*/}]);
```

So this is possible:

```js
angular.module('Module_A', ['Module_B'])
  .controller('Controller_A', ['Service_B', function(ServiceB) {/*...*/}]);

angular.module('Module_B', [])
  .service('Service_B', function() {/*...*/})
```

But this will throw a dependency resolution error!

```js
angular.module('Module_A', ['Module_B'])
  .service('Service_B', function() {/*...*/});

angular.module('Module_B', [])
  .controller('Controller_A', ['Service_B', function(ServiceB) {/*...*/}]);
```

> ⚠️️ "Modules" only depends on "Modules". "Services and Controller" only depends on "Services and Controller"

## Controllers

## Services

## angular-ui and App states

A "state" of an angular app is the object regrouping the template with the controller allowing both to interact with each others.
All this will be linked to an url. At this url you will get a template that have been rendered with a controller.

```js
angular.module('my-app', ['ui.router'])
  .config(['$stateProvider', function($stateProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: './home/home.html',
        controller: 'HomeController',
        controllerAs: 'home'
      });
  }]);
```


## Architecture of the example:

> **/src**
> > **/features**
> > > **/home** - main module of the app containing: controllers, views and css files needed to display the home page 
> >
> > **/services** - contains all services that share the same module: `services`
> >
> > **/app.js** - entry point of the application


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

1. Create an controller in a `home.controller.js` file and a template in a `home.html` file inside the `/home` folder and link them together with an `angular-ui state` in `home/module.js`
2. Modify the Home controller and add a `name` variable on it then modify the template to display this variable.
3. Add a service named `randomNames.service.js` in `/services` and link it the the `services/module.js`. This service should return a random name from a list of names. Then, use this service to get
   a random name in home controller.
4. Use [this open API](http://swapi.co/documentation#people) to get names from star wars instead. You can use [$http.get](https://docs.angularjs.org/api/ng/service/$http) to do an ajax call.
   `$http.get` will return a promise, look at examples on the page to understand how to use it.

> ⚠️️ Try to execute your code at each step to see if you broke something
