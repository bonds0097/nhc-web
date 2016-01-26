'use strict';

describe('Controller: ProfilemodalCtrl', function () {

  // load the controller's module
  beforeEach(module('nhcWebApp'));

  var ProfilemodalCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProfilemodalCtrl = $controller('ProfilemodalCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ProfilemodalCtrl.awesomeThings.length).toBe(3);
  });
});
