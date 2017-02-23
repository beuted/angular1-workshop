describe('Controller: Home', function() {
  var $controller;

  beforeEach(angular.mock.module('app.home'));

  beforeEach(angular.mock.inject(function(_$controller_) {
    $controller = _$controller_;
  }));

  it('name is initialized to Human', function() {
    var ctrl = $controller('HomeController');
    expect(ctrl.name).toBe('Human');
  });
});
