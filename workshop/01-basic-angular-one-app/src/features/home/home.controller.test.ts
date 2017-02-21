import {} from 'jasmine';
import * as angular from 'angular';
import {} from 'angular-mocks';
import home from './index';
import HomeController from './home.controller';

describe('Controller: Home', function() {
  let $controller: angular.IControllerService;

  beforeEach(angular.mock.module(home));

  beforeEach(angular.mock.inject(function(_$controller_: angular.IControllerService) {
    $controller = _$controller_;
  }));

  it('name is initialized to World', function() {
    let ctrl = <HomeController>$controller('HomeController');
    expect(ctrl.name).toBe('World');
  });
});
