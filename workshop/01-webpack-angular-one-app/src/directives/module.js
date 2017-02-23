angular = require('angular');
GreetingDirective = require('./greeting.directive')

var DirectivesModuleName = angular.module('directives.greeting', [])
  .directive('greeting', GreetingDirective)
  .name;

module.exports = DirectivesModuleName;