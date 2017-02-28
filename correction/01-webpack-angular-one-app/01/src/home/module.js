var homeController = require('./home.controller');

angular.module('app.home', [])
    .controller('home-controller', ['randomName-service', homeController]);
