'use strict';

describe('Service: Commitments', function () {

  // load the service's module
  beforeEach(module('nhcWebApp'));

  // instantiate service
  var Commitments;
  beforeEach(inject(function (_Commitments_) {
    Commitments = _Commitments_;
  }));

  it('should do something', function () {
    expect(!!Commitments).toBe(true);
  });

});
