var angular = require('angular');
var RandomNamesService = require('./randomNames.service');

var ServicesModuleName = angular.module('services', [])
  .service('randomNames', RandomNamesService)
  .name;

module.exports = ServicesModuleName;