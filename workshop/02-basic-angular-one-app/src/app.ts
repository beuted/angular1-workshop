import 'bootstrap/dist/css/bootstrap.css';

import * as angular from 'angular';
import * as uirouterModule from 'angular-ui-router';

import { routes } from './app.config';
import { HomeModuleName } from './features/home';

angular.module('app', <string[]>[uirouterModule, HomeModuleName])
  .config(routes);
