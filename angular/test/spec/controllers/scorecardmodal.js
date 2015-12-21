'use strict';

describe('Controller: ScorecardmodalCtrl', function () {

  // load the controller's module
  beforeEach(module('nhcWebApp'));

  var ScorecardmodalCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ScorecardmodalCtrl = $controller('ScorecardmodalCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ScorecardmodalCtrl.awesomeThings.length).toBe(3);
  });
});
