var angular = require('angular');

var RandomNames = function() {
  this.names = ['La Tronche', 'Fontaine', 'Vinoux', 'Saint Martin d\'Hères', 'Eybens', 'Sassenage', 'St Martin le Vinoux', 'Grenoble'];

  this.getName = function() {
    var totalNames = this.names.length;
    var rand = Math.floor(Math.random() * totalNames);
    return this.names[rand];
  }

  return this;
}

var randomNameModule = angular.module('services.random-names', [])
  .service('randomNames', RandomNames)
  .name;

module.exports = randomNameModule;