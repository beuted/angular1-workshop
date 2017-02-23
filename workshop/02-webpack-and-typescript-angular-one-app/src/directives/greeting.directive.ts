import * as angular from 'angular';

function GreetingDirective() {
  return {
    restrict: 'E',
    scope: {
      name: '='
    },
    template: '<h1>Hello, {{name}}</div>'
  }
}

export const GreetingModuleName = angular.module('directives.greeting', [])
  .directive('greeting', GreetingDirective)
  .name;