import * as angular from 'angular';

export class RandomNamesService {
  private names: string[];

  constructor() {
    this.names = ['La Tronche', 'Fontaine', 'Vinoux', 'Saint Martin d\'Hères', 'Eybens', 'Sassenage', 'St Martin le Vinoux', 'Grenoble'];
  }

  public getName() {
    const totalNames = this.names.length;
    const rand = Math.floor(Math.random() * totalNames);
    return this.names[rand];
  }
}

export const RandomNameModuleName = angular.module('services.random-names', [])
  .service('randomNames', RandomNamesService)
  .name;