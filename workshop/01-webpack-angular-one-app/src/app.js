require('bootstrap/dist/css/bootstrap.css');

var angular = require('angular');
var uirouter = require('angular-ui-router');
var HomeModuleName = require('./features/home/module');
var RoutingConfiguration = require('./app.routes');

angular.module('app', [uirouter, HomeModuleName])
  .config(RoutingConfiguration);
