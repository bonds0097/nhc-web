'use strict';

describe('Filter: mapRole', function () {

  // load the filter's module
  beforeEach(module('nhcWebApp'));

  // initialize a new instance of the filter before each test
  var mapRole;
  beforeEach(inject(function ($filter) {
    mapRole = $filter('mapRole');
  }));

  it('should return the input prefixed with "mapRole filter:"', function () {
    var text = 'angularjs';
    expect(mapRole(text)).toBe('mapRole filter: ' + text);
  });

});
