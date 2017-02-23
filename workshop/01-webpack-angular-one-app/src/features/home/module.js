require('./home.css');

var angular = require('angular');
var uirouterName = require('angular-ui-router');

var RoutingConfiguration = require('./home.routes.js');
var HomeController = require('./home.controller');
var ServicesModuleName = require('../../services/module');
var DirectivesModuleName = require('../../directives/module');

var HomeModuleName = angular.module('app.home', [uirouterName, ServicesModuleName, DirectivesModuleName])
  .config(RoutingConfiguration)
  .controller('HomeController', HomeController)
  .name;

module.exports = HomeModuleName;