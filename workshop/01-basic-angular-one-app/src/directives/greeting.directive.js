angular = require('angular');

var GreetingDirective = function() {
  return {
    restrict: 'E',
    scope: {
      name: '='
    },
    template: '<h1>Hello, {{name}}</div>'
  }
}

var greetingModuleName = angular.module('directives.greeting', [])
  .directive('greeting', GreetingDirective)
  .name;

module.exports = greetingModuleName;