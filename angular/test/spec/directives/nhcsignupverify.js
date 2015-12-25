'use strict';

describe('Directive: nhcSignupVerify', function () {

  // load the directive's module
  beforeEach(module('nhcWebApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<nhc-signup-verify></nhc-signup-verify>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the nhcSignupVerify directive');
  }));
});
