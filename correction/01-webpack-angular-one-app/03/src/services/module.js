var randomNameService = require('./randomName.service');

var serviceModule = angular.module('app.services', [])
    .service('randomName-service', randomNameService);

module.exports = serviceModule.name;