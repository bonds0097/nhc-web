'use strict';

describe('Controller: AdminglobalsCtrl', function () {

  // load the controller's module
  beforeEach(module('nhcWebApp'));

  var AdminglobalsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AdminglobalsCtrl = $controller('AdminglobalsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AdminglobalsCtrl.awesomeThings.length).toBe(3);
  });
});
