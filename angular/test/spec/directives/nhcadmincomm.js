'use strict';

describe('Directive: nhcAdminComm', function () {

  // load the directive's module
  beforeEach(module('nhcWebApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<nhc-admin-comm></nhc-admin-comm>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the nhcAdminComm directive');
  }));
});
