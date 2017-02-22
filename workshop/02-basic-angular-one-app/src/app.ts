import 'bootstrap/dist/css/bootstrap.css';

import * as angular from 'angular';
import * as uirouter from 'angular-ui-router';

import routing from './app.config';
import home from './features/home';

angular.module('app', <string[]>[uirouter, home])
  .config(routing);
