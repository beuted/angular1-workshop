var homeTemplate = require('./home.html');

var RoutingConfiguration = function($stateProvider) {
    $stateProvider
        .state('home', {
          url: '/',
          template: homeTemplate,
          controller: 'HomeController',
          controllerAs: 'home'
        });
}

RoutingConfiguration.$inject = ['$stateProvider'];

module.exports = RoutingConfiguration;