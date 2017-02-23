var angular = require('angular');

var RandomNamesService = function() {
  this.names = ['La Tronche', 'Fontaine', 'Vinoux', 'Saint Martin d\'Hères', 'Eybens', 'Sassenage', 'St Martin le Vinoux', 'Grenoble'];

  this.getName = function() {
    var totalNames = this.names.length;
    var rand = Math.floor(Math.random() * totalNames);
    return this.names[rand];
  }

  return this;
}

var RandomNamesModuleName = angular.module('services.random-names', [])
  .service('randomNames', RandomNamesService)
  .name;

module.exports = RandomNamesModuleName;