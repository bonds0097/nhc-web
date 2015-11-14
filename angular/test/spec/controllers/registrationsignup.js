'use strict';

describe('Controller: RegistrationsignupctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('nhcWebApp'));

  var RegistrationsignupctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RegistrationsignupctrlCtrl = $controller('RegistrationsignupctrlCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RegistrationsignupctrlCtrl.awesomeThings.length).toBe(3);
  });
});
