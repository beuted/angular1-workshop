var homeController = require('./home.controller');

var homeModule = angular.module('app.home', [])
    .controller('home-controller', homeController);

module.exports = homeModule.name;
