'use strict';

describe('Service: Registration', function () {

  // load the service's module
  beforeEach(module('nhcWebApp'));

  // instantiate service
  var Registration;
  beforeEach(inject(function (_Registration_) {
    Registration = _Registration_;
  }));

  it('should do something', function () {
    expect(!!Registration).toBe(true);
  });

});
