// Depends from:
// * angular.js
// * angular-ui-router.js
// * home.routes.js
// * home.controller.js

angular.module('app.home', ['ui.router'])
  .config(['$stateProvider', function($stateProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: './home/home.html',
        controller: 'HomeController',
        controllerAs: 'homeCtrl'
      });
  }])
  .controller('HomeController', [HomeController]);