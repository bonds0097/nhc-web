'use strict';

describe('Service: Password', function () {

  // load the service's module
  beforeEach(module('nhcWebApp'));

  // instantiate service
  var Password;
  beforeEach(inject(function (_Password_) {
    Password = _Password_;
  }));

  it('should do something', function () {
    expect(!!Password).toBe(true);
  });

});
