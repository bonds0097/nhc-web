'use strict';

describe('Service: RegistrationData', function () {

  // load the service's module
  beforeEach(module('nhcWebApp'));

  // instantiate service
  var RegistrationData;
  beforeEach(inject(function (_RegistrationData_) {
    RegistrationData = _RegistrationData_;
  }));

  it('should do something', function () {
    expect(!!RegistrationData).toBe(true);
  });

});
