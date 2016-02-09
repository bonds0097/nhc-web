'use strict';

describe('Controller: QuestionrespmodalCtrl', function () {

  // load the controller's module
  beforeEach(module('nhcWebApp'));

  var QuestionrespmodalCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    QuestionrespmodalCtrl = $controller('QuestionrespmodalCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(QuestionrespmodalCtrl.awesomeThings.length).toBe(3);
  });
});
