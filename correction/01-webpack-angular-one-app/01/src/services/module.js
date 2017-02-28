var randomNameService = require('./randomName.service');

angular.module('app.services', [])
    .service('randomName-service', ['$http', randomNameService]);
