'use strict';

describe('Controller: NhcalertCtrl', function () {

  // load the controller's module
  beforeEach(module('nhcWebApp'));

  var NhcalertCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NhcalertCtrl = $controller('NhcalertCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(NhcalertCtrl.awesomeThings.length).toBe(3);
  });
});
