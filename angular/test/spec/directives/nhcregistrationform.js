'use strict';

describe('Directive: nhcRegistrationForm', function () {

  // load the directive's module
  beforeEach(module('nhcWebApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<nhc-registration-form></nhc-registration-form>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the nhcRegistrationForm directive');
  }));
});
