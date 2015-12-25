'use strict';

describe('Controller: SignupverifyCtrl', function () {

  // load the controller's module
  beforeEach(module('nhcWebApp'));

  var SignupverifyCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SignupverifyCtrl = $controller('SignupverifyCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SignupverifyCtrl.awesomeThings.length).toBe(3);
  });
});
