// Depends from:
// * angular.js

function greeting() {
  return {
    restrict: 'E',
    scope: {
      name: '='
    },
    template: '<h1>Hello, {{name}}</div>'
  }
}

angular.module('directives.greeting', [])
  .directive('greeting', greeting);