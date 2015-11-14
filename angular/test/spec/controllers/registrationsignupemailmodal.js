'use strict';

describe('Controller: RegistrationsignupemailmodalCtrl', function () {

  // load the controller's module
  beforeEach(module('nhcWebApp'));

  var RegistrationsignupemailmodalCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RegistrationsignupemailmodalCtrl = $controller('RegistrationsignupemailmodalCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RegistrationsignupemailmodalCtrl.awesomeThings.length).toBe(3);
  });
});
