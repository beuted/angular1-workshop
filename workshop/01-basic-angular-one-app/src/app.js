require('bootstrap/dist/css/bootstrap.css');

angular = require('angular');
uirouter = require('angular-ui-router');

routing = require('./app.config');
home = require('./features/home');

angular.module('app', [uirouter, home])
  .config(routing);
