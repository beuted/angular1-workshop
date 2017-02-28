# Workshop - Basic angular 1 App

## Setting up the app locally

* [Install node](https://nodejs.org)
* run `$ npm install`

## Commands

* Run app for local development: `$ npm run dev`
* Build for production: `$ npm run build`
* Run unit-tests: `$ npm run test`
* Run unit-tests for local development: `$ npm run test:live`

## When your app is working fine

1. Create a module named `'app.home'` inside the `home/module.js` folder and load it from the main module `'app'`
2. Create a controller `app.controller.js` at the root of the app and link it inside the main html file `index.html`, try to add a `name` variable on it then modify the template to display this variable.
3. Create a controller in a `home.controller.js` file and a template in a `home.html` file inside the `/home` folder and link them together with an `angular-ui state` in `home/module.js`
   For this you will need `angular-ui-router` so we need to import the library with `npm install --save angular-ui-router` and then link it in the `index.html` under
   `<script src="vendors/angular-ui-router/release/angular-ui-router.js" type="text/javascript"></script>`
   Make the url of the home template be just `"/"`.

   Once it's done you can add this config to your app module:
   ```js
    .config(['$urlRouterProvider', '$locationProvider', function($urlRouterProvider, $locationProvider) {
        $locationProvider.html5Mode(true); // Remove the "/#/" in your URL
        $urlRouterProvider.otherwise('/home'); // Make the app redirect to "/home" when URL does not match a state
    }])
   ```

4. Add a service named `randomNames.service.js` in `/services` and link it the the `services/module.js`. This service should return a random name from a list of names.
   Then, use this service to get a random name in home controller. Beware to link all the dependencies between modules and between controllers/services, execute your code often to see
   what is missing.
5. Use [this open API](http://swapi.co/documentation#people) to get names from star wars instead. You will need to use [$http.get](https://docs.angularjs.org/api/ng/service/$http) to do an ajax call.
   Beware that `$http.get` will return a promise, look at examples on the page to understand how to use it.

> ⚠️️ Try to execute your code often to see if you broke something!

## Aimed Architecture of the example:

> **/src**
>
> > **/home** - main module of the app containing: controllers, views and css files needed to display the home page 
> >
> > > * home.html
> > > * home.controler.js
> > > * module.js
> > >
> > **/services** - contains all services that share the same module: `services`
> >
> > > * module.js
> > > * randomName.service.js
> >
> > * app.js - entry point of the application
> > * index.html
