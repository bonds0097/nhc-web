'use strict';

describe('Controller: NhcregistrationconfirmCtrl', function () {

  // load the controller's module
  beforeEach(module('nhcWebApp'));

  var NhcregistrationconfirmCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NhcregistrationconfirmCtrl = $controller('NhcregistrationconfirmCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(NhcregistrationconfirmCtrl.awesomeThings.length).toBe(3);
  });
});
