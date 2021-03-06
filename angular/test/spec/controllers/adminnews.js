'use strict';

describe('Controller: AdminnewsCtrl', function () {

  // load the controller's module
  beforeEach(module('nhcWebApp'));

  var AdminnewsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AdminnewsCtrl = $controller('AdminnewsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AdminnewsCtrl.awesomeThings.length).toBe(3);
  });
});
