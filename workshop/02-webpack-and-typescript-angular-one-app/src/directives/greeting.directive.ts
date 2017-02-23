import * as angular from 'angular';

export function GreetingDirective() {
  return {
    restrict: 'E',
    scope: {
      name: '='
    },
    template: '<h1>Hello, {{name}}<br> Welcome to ##TODO##</h1>'
  }
}

//TODO: Modify this directive to be able to display a location