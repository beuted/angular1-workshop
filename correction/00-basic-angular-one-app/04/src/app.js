angular.module('app', ['app.home', 'app.services', 'ui.router'])
  .config(['$urlRouterProvider', '$locationProvider', function($urlRouterProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/home');
   }])
   .config(['$stateProvider', function($stateProvider) {
       $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: './home/home.html',
                controller: 'home-controller',
                controllerAs: 'home'
            });
    }]);
