'use strict';

describe('Controller: BonusquestionCtrl', function () {

  // load the controller's module
  beforeEach(module('nhcWebApp'));

  var BonusquestionCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BonusquestionCtrl = $controller('BonusquestionCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BonusquestionCtrl.awesomeThings.length).toBe(3);
  });
});
