// Jasmine exports modules but we don't need them.
// We just want jasmine to be loaded to have the functions it add on window (describe, beforeEach, it, etc...)
import {} from 'jasmine';

// We need angular to be loaded, we take everything is exports and namespace it with 'angular'
// we could import just the interfaces we need (ie { IControllerService }) but that would be a pain
// to do that everywhere
import * as angular from 'angular';

// We just need to depend on this module that will add the ".mock" object on the angular object
import 'angular-mocks';

// The next to imports
import { HomeModuleName } from './module';
import { HomeController } from './home.controller';

describe('Controller: Home', function() {
  let $controller: angular.IControllerService;

  beforeEach(angular.mock.module(HomeModuleName));

  beforeEach(angular.mock.inject(function(_$controller_: angular.IControllerService) {
    $controller = _$controller_;
  }));

  it('name is initialized to World', function() {
    let ctrl = <HomeController>$controller('HomeController');
    expect(ctrl.name).toBe('World');
  });
});
