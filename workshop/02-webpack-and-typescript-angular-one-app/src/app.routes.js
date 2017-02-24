var RoutingConfiguration = function($urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');
}

RoutingConfiguration.$inject = ['$urlRouterProvider', '$locationProvider'];

module.exports = RoutingConfiguration;