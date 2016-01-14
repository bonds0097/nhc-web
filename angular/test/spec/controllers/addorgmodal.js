'use strict';

describe('Controller: AddorgmodalCtrl', function () {

  // load the controller's module
  beforeEach(module('nhcWebApp'));

  var AddorgmodalCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddorgmodalCtrl = $controller('AddorgmodalCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AddorgmodalCtrl.awesomeThings.length).toBe(3);
  });
});
