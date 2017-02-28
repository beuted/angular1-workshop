import * as angular from 'angular';
import { RandomNamesService } from './randomNames.service'

export const ServicesModuleName = angular.module('services', [])
  .service('randomNames', RandomNamesService)
  .name;