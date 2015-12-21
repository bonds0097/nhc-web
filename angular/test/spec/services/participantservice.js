'use strict';

describe('Service: ParticipantService', function () {

  // load the service's module
  beforeEach(module('nhcWebApp'));

  // instantiate service
  var ParticipantService;
  beforeEach(inject(function (_ParticipantService_) {
    ParticipantService = _ParticipantService_;
  }));

  it('should do something', function () {
    expect(!!ParticipantService).toBe(true);
  });

});
