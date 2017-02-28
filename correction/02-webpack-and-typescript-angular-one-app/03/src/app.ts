import 'bootstrap/dist/css/bootstrap.css';

import * as angular from 'angular';
import * as uirouterModule from 'angular-ui-router';

import { RoutingConfiguration } from './app.config';
import { HomeModuleName } from './home/module';

angular.module('app', <string[]>[uirouterModule, HomeModuleName])
  .config(RoutingConfiguration);
