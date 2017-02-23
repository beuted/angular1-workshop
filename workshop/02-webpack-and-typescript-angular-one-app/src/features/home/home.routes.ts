import * as angular from 'angular';

routes.$inject = ['$stateProvider'];

export function routes($stateProvider: ng.ui.IStateProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      template: require('./home.html'),
      controller: 'HomeController',
      controllerAs: 'home'
    });
}