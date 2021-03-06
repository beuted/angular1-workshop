var angular = require('angular');
var angularUi = require('angular-ui-router');

var homeModuleName = require('./home/module');
var servicesModuleName = require('./services/module');

var homeTemplate = require('./home/home.html');

angular.module('app', [homeModuleName, servicesModuleName, angularUi])
  .config(['$urlRouterProvider', '$locationProvider', function($urlRouterProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/home');
   }])
   .config(['$stateProvider', function($stateProvider) {
       $stateProvider
            .state('home', {
                url: '/home',
                template: homeTemplate,
                controller: 'home-controller',
                controllerAs: 'home'
            });
    }]);
