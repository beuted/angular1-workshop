var homeTemplate = require('./home.html');

var RoutingConfiguration = function($stateProvider) {
    $stateProvider
        .state('home', {
          url: '/',
          template: homeTemplate,
          controller: 'HomeController',
          controllerAs: 'homeCtrl'
        });
}

RoutingConfiguration.$inject = ['$stateProvider'];

module.exports = RoutingConfiguration;