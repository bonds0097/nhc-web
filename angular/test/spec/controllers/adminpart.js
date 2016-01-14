'use strict';

describe('Controller: AdminpartCtrl', function () {

  // load the controller's module
  beforeEach(module('nhcWebApp'));

  var AdminpartCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AdminpartCtrl = $controller('AdminpartCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AdminpartCtrl.awesomeThings.length).toBe(3);
  });
});
