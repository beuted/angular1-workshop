require('bootstrap/dist/css/bootstrap.css');

angular = require('angular');
uirouter = require('angular-ui-router');
HomeModuleName = require('./features/home/module');
RoutingConfiguration = require('./app.routes');

angular.module('app', [uirouter, HomeModuleName])
  .config(RoutingConfiguration);
