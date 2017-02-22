var routing = function($urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');
}

routing.$inject = ['$urlRouterProvider', '$locationProvider'];

module.exports = routing;
