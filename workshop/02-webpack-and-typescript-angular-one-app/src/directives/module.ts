import * as angular from 'angular';
import { GreetingDirective } from './greeting.directive';

export const DirectivesModuleName = angular.module('directives', [])
  .directive('greeting', GreetingDirective)
  .name;