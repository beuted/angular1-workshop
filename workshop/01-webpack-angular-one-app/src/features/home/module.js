require('./home.css');

angular = require('angular');
uirouterName = require('angular-ui-router');

RoutingConfiguration = require('./home.routes.js');
HomeController = require('./home.controller');
RandomNamesServiceName = require('../../services/randomNames.service');
GreetingDirectiveName = require('../../directives/greeting.directive');

var HomeModuleName = angular.module('app.home', [uirouterName, RandomNamesServiceName, GreetingDirectiveName])
  .config(RoutingConfiguration)
  .controller('HomeController', HomeController)
  .name;

module.exports = HomeModuleName;