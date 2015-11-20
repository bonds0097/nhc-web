'use strict';

describe('Directive: nhcRegistrationSignup', function () {

  // load the directive's module
  beforeEach(module('nhcWebApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<nhc-registration-signup></nhc-registration-signup>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the nhcRegistrationSignup directive');
  }));
});
