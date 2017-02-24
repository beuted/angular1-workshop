// Depends from JS point of view from:
// * angular.js
// * angular-ui-router.js => for $urlRouterProvider

// Depends from Angular point view from:
// * angular.js
// * angular-ui-router.js
// * home/module.js

angular.module('app', ['ui.router', 'app.home'])
  .config(['$urlRouterProvider', '$locationProvider', function($urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
  }]);
