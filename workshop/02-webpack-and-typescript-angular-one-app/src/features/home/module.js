// Depends from:
// * angular.js
// * angular-ui-router.js
// * home.routes.js
// * home.controller.js
// * ../../services/randomNames.service.js

angular.module('app.home', ['ui.router', 'services'])
  .config(['$stateProvider', function($stateProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: './features/home/home.html',
        controller: 'HomeController',
        controllerAs: 'homeCtrl'
      });
  }])
  .controller('HomeController', ['randomNames', HomeController]);