require('./home.css');

angular = require('angular');
uirouter = require('angular-ui-router');

HomeController = require('./home.controller');
randomNames = require('../../services/randomNames.service');
greeting    = require('../../directives/greeting.directive');

var homeModule = angular.module('app.home', [uirouter, randomNames, greeting])
  .config(['$stateProvider', function($stateProvider) {
      $stateProvider
        .state('home', {
          url: '/',
          template: require('./home.html'),
          controller: 'HomeController',
          controllerAs: 'home'
        });
  }])
  .controller('HomeController', HomeController)
  .name;

module.exports = homeModule;