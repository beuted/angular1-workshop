// Depends from:
// * angular.js
// randomNames.service.js

angular.module('services', [])
  .service('randomNames', ['$http', RandomNamesService]);