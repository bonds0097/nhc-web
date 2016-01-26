'use strict';

describe('Service: Communications', function () {

  // load the service's module
  beforeEach(module('nhcWebApp'));

  // instantiate service
  var Communications;
  beforeEach(inject(function (_Communications_) {
    Communications = _Communications_;
  }));

  it('should do something', function () {
    expect(!!Communications).toBe(true);
  });

});
