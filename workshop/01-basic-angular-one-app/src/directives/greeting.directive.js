angular = require('angular');

var greeting = function() {
  return {
    restrict: 'E',
    scope: {
      name: '='
    },
    template: '<h1>Hello, {{name}}</div>'
  }
}

var greetingModule = angular.module('directives.greeting', [])
  .directive('greeting', greeting)
  .name;

module.exports = greetingModule;