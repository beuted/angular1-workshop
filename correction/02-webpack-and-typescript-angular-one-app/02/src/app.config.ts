export function RoutingConfiguration($urlRouterProvider: angular.ui.IUrlRouterProvider, $locationProvider: angular.ILocationProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');
}

RoutingConfiguration.$inject = ['$urlRouterProvider', '$locationProvider'];
