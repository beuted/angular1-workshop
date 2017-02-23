import './home.css';

import * as angular from 'angular';
import * as uirouter from 'angular-ui-router';

import { routes } from './home.routes';
import { HomeController } from './home.controller';
import { ServicesModuleName } from '../../services/module';
import { DirectivesModuleName } from '../../directives/module';

export const HomeModuleName = angular.module('app.home', <string[]>[uirouter, ServicesModuleName, DirectivesModuleName])
  .config(routes)
  .controller('HomeController', HomeController)
  .name;