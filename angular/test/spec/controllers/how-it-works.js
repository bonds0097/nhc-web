'use strict';

describe('Controller: HowItWorksCtrl', function () {

  // load the controller's module
  beforeEach(module('nhcWebApp'));

  var HowItWorksCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HowItWorksCtrl = $controller('HowItWorksCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(HowItWorksCtrl.awesomeThings.length).toBe(3);
  });
});
