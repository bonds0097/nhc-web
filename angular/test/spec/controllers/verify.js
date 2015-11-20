'use strict';

describe('Controller: VerifyCtrl', function () {

  // load the controller's module
  beforeEach(module('nhcWebApp'));

  var VerifyCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    VerifyCtrl = $controller('VerifyCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(VerifyCtrl.awesomeThings.length).toBe(3);
  });
});
