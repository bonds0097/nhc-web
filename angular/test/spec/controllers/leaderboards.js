'use strict';

describe('Controller: LeaderboardsCtrl', function () {

  // load the controller's module
  beforeEach(module('nhcWebApp'));

  var LeaderboardsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LeaderboardsCtrl = $controller('LeaderboardsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(LeaderboardsCtrl.awesomeThings.length).toBe(3);
  });
});
