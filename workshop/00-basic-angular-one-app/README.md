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

> ⚠️️ "Modules" only depends on "Modules". "Services, Directives and Controller" only depends on "Services, Directives and Controller"

## Controllers

## Services

## Directives

## Bonus: angular-ui and App states

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
> > **/directives** - contains all directives that share the same module: `directives`
> >
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

1. Implement a service allowing to us to get a random planet from this API: http://swapi.co/documentation#planets and put this service on the `services` module in the `src/service` folder
2. Modify the greeting directive so that it takes a `location` parameter the same way it currently takes a name parameter.
3. Modify the Home template and controller to display a random planet when clicking the "random" button.

> ⚠️️ Try to execute your code at each step to see if you broke something
