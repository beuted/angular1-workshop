import './home.css';

import * as angular from 'angular';
import * as uirouter from 'angular-ui-router';

import { routes } from './home.routes';
import { HomeController } from './home.controller';
import { RandomNameModuleName } from '../../services/randomNames.service';
import { GreetingModuleName } from '../../directives/greeting.directive';

export const HomeModuleName = angular.module('app.home', <string[]>[uirouter, RandomNameModuleName, GreetingModuleName])
  .config(routes)
  .controller('HomeController', HomeController)
  .name;