# Plain ES5 Angular 1 App

I think it's important to start from a very simple angular 1 app to understand all the weird things you might encounter when you're working on
an angular 1 app running with webpack and typescript. That's why we're going to start simple and add complexity progressively.

This will be our starting point. This javascript project main technologies are:
* `npm` to load our development dependencies only
* `angular` the js framework on top of wich we are going to build our app

## Few words on Angular 1

Angular is a client-side **MVW** JavaScript framework for writing compelling web applications.
It's built and maintained by Google and offers a futuristic spin on the web and its upcoming features and standards.

> Quick Quizz: **What does MVW stands for ?** 

MVW stands for Model-View-Whatever, which gives us flexibility over design patterns when developing applications.
We might choose an MVC (Model-View-Controller) or MVVM (Model-View-ViewModel) approach.

Which make angular a very powerfull tool but also a very easy-to-get-lost one...

Knowing that, I must say that Angular has been leaning more towards MVVM in recent years. and I'll try to present this workshop staying as close as possible from
the Angular 2 way for building application.

## Angular Organisation & Dependencies

We are going to present 2 main Angular type of objects: **Services** & **Controllers**

An angular app is organized around several **modules**, a module will contains **Services** and **Controllers**.

```js
angular.module('My_Module', [])
  .service('My_Service', function() {/* service implementation ...*/})
  .controller('My_Controller', function() {/* controller implementation ...*/});
```

These modules also configure the dependency injector of angular.
So if `Module_A` needs a Service that is included in `Module_B`, `Module_A` will simply declare `Module_B` in its dependency at initialization.

```js
angular.module('Module_A', ['Module_B', 'Other_Module', /* ... */]);
```

The same dependency mecanism can be found inside modules at the `service` and `controller` level.

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

**WORKSHOP: Exercice 1**

## Controllers

`Controllers` are constructor functions (meaning functions that will attach properties to themselves using `this.myPropertie = "..."`) that are attached to an HTML file named template and that will manipulate the DOM of this template.

Here is a quick example on how to use them:

```js
var myApp = angular.module('app', []);

myApp.controller('greeting-controller', function() {
  this.greeting = 'Hola!';

  this.showAlert = function() {
    alert('This is an alert!');
  }
}]);
```

We add the controller's constructor function to the module using the `.controller()` method. On this controller we see the property "greeting" and a function, "showAlert", showing an alert on the page.

Then we attach our controller to the DOM using the `ng-controller` directive. The `greeting` property can now be data-bound to the template:

```html
<div ng-controller="greeting-controller as ctrl">
  {{ ctrl.greeting }}
</div>
```

as well as the "showAlert" function:

```html
<div ng-controller="greeting-controller as ctrl">
  {{ ctrl.greeting }}
  <button ng-click="ctrl.showAlert()">Show me a nice alert</button>
</div>
```

> ⚠️️ `Controllers` should be used purely to wire up `Services`, dependencies and other objects, and assign them to the view.

**WORKSHOP: Exercice 2**

## angular-ui and App states

`angular-ui-router` is the routing module of angular, it let us define "states" in our app.
A "state" of an angular app is the object regrouping a template, a controller and an url. Controller and templates will interact the same way we have seen previously.
States Allows us to easily map template/controller couples to urls in our application.

Adding a state to a module is done in it's configuration, calling the `$stateProvider` object. The syntax is the following:

```js
angular.module('app', ['ui.router'])
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

Notice that we need to import the `'ui.router'` module as a dependency to our `"app"` module in order to access the `$stateProvider` and create a `state`.

The `ui.router` will then take the given view and replace `<ui-view></ui-view>` when found in the index.html.

**WORKSHOP: Exercice 3**

## Services

`Services` are singleton objects that can be referenced accross your application.

Keep in mind that services are singleton object and gets instantiated once per angular app. Let's start with creating a very simple service.
This service will find square of a given number. We have created `service.js file and inside that creating a service or registering a service using the service method as shown below:

```js
var CalculatorService = angular.module('CalculatorModule', [])
  .service('Calculator', function () {
      this.square = function (a) { return a * a };
  });
```

Above we have created the calculator service using the service() method. To use the service in the controller,
we are passing the service module "CalculatorModule" as dependency in the application module.
Next in the controller we are passing name of the service "Calculator" to be used and then the controller function as done previously.

```js
var myApp = angular.module('myApp', ['CalculatorModule']);
myApp.controller('CalculatorController', ['Calculator', function (Calculator) {
    this.answer = "?";

    this.findSquare = function () {
        this.answer = Calculator.square(this.number);
    }
}]);
```

On the view we are using the controller to do the data binding as shown below

```html
<div ng-controller="CalculatorController as ctrl">
   <input type="number" ng-model="ctrl.number">
   <button ng-click="ctrl.findSquare()">Square</button>
   <div>{{ ctrl.answer }}</div>
</div>
```

Four main things to remember about Services:

* It provides us method to keep data across the lifetime of the angular app
* It provides us method to communicate data across the controllers in a consistent way
* This is a singleton object and it gets instantiated only once per application !
* It should be used to organize and share data and functions across your application

**WORKSHOP: Exercice 4**

## Angular Native Services

Angular comes with several handy services, you can recognize them by their prefix: they all start with **"$"**. For the last exercice of this part, we are going to need one of them : `$http`. 

`$http` allows you to easily do XHR calls in your code with the following syntax:

```js
$http.get('http://swapi.co/api/people/12');
```

As we have seen JS being an asynchronous language this function cannot possibly just return the result of the GET call to that url. Indeed it returns a Promise to this result that have the following properties:

```js
{ data: "response of the http GET", TODO...}
```

The returned object being a Promise we need to handle it this way:

```js
return $http.get('http://swapi.co/api/people/12')
    .then(function(res) {
        console.log(res.data);
    }).catch(function(err){
        console.error(err.data);
    });
```