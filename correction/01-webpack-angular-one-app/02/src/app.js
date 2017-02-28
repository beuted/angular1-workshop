var angular = require('angular');
var angularUi = require('angular-ui-router');

var appHome = require('./home/module');
var appServices = require('./services/module');

var homeTemplate = require('./home/home.html');

angular.module('app', ['app.home', 'app.services', 'ui.router'])
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
