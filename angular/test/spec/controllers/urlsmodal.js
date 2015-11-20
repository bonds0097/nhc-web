'use strict';

describe('Controller: UrlsmodalCtrl', function () {

  // load the controller's module
  beforeEach(module('nhcWebApp'));

  var UrlsmodalCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UrlsmodalCtrl = $controller('UrlsmodalCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(UrlsmodalCtrl.awesomeThings.length).toBe(3);
  });
});
