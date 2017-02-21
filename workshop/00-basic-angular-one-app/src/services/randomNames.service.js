import angular from 'angular';

class RandomNames {
  constructor() {
    this.names = ['La Tronche', 'Fontaine', 'Vinoux', 'Saint Martin d\'Hères', 'Eybens', 'Sassenage', 'St Martin le Vinoux', 'Grenoble'];
  }

  getName() {
    const totalNames = this.names.length;
    const rand = Math.floor(Math.random() * totalNames);
    return this.names[rand];
  }
}

export default angular.module('services.random-names', [])
  .service('randomNames', RandomNames)
  .name;