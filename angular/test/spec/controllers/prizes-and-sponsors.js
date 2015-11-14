'use strict';

describe('Controller: PrizesAndSponsorsCtrl', function () {

  // load the controller's module
  beforeEach(module('nhcWebApp'));

  var PrizesAndSponsorsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PrizesAndSponsorsCtrl = $controller('PrizesAndSponsorsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PrizesAndSponsorsCtrl.awesomeThings.length).toBe(3);
  });
});
