var HomeModuleName = require('./module');

describe('Controller: Home', function() {
  var $controller;

  beforeEach(angular.mock.module(HomeModuleName));

  beforeEach(angular.mock.inject(function(_$controller_) {
    $controller = _$controller_;
  }));

  it('name is initialized to World', function() {
    var ctrl = $controller('HomeController');
    expect(ctrl.name).toBe('World');
  });
});
