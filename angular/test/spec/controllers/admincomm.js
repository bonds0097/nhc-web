'use strict';

describe('Controller: AdmincommCtrl', function () {

  // load the controller's module
  beforeEach(module('nhcWebApp'));

  var AdmincommCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AdmincommCtrl = $controller('AdmincommCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AdmincommCtrl.awesomeThings.length).toBe(3);
  });
});
