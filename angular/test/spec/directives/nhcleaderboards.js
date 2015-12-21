'use strict';

describe('Directive: nhcLeaderboards', function () {

  // load the directive's module
  beforeEach(module('nhcWebApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<nhc-leaderboards></nhc-leaderboards>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the nhcLeaderboards directive');
  }));
});
