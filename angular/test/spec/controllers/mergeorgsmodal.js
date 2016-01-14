'use strict';

describe('Controller: MergeorgsmodalCtrl', function () {

  // load the controller's module
  beforeEach(module('nhcWebApp'));

  var MergeorgsmodalCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MergeorgsmodalCtrl = $controller('MergeorgsmodalCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MergeorgsmodalCtrl.awesomeThings.length).toBe(3);
  });
});
