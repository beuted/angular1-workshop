var RoutingConfiguration = function($stateProvider) {
    $stateProvider
        .state('home', {
          url: '/',
          template: require('./home.html'),
          controller: 'HomeController',
          controllerAs: 'home'
        });
}

RoutingConfiguration.$inject = ['$stateProvider'];

module.exports = RoutingConfiguration;