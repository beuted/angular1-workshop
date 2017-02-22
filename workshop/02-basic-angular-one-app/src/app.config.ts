export default function routing($urlRouterProvider: angular.ui.IUrlRouterProvider, $locationProvider: angular.ILocationProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');

  return {
    $inject: ['$urlRouterProvider', '$locationProvider']
  }
}
