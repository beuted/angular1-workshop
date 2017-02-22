import './home.css';

import * as angular from 'angular';
import * as uirouter from 'angular-ui-router';

import routing from './home.routes';
import HomeController from './home.controller';
import randomNames from '../../services/randomNames.service';
import greeting    from '../../directives/greeting.directive';


console.log(uirouter, randomNames, greeting);
export default angular.module('app.home', <string[]>[uirouter, randomNames, greeting])
  .config(routing)
  .controller('HomeController', HomeController)
  .name;