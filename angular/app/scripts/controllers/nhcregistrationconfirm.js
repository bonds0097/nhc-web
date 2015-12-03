'use strict';

/**
 * @ngdoc function
 * @name nhcWebApp.controller:NhcregistrationconfirmCtrl
 * @description
 * # NhcregistrationconfirmCtrl
 * Controller of the nhcWebApp
 */
angular.module('nhcWebApp')
  .controller('RegistrationConfirmCtrl', ['RegistrationData', function (RegistrationData) {
    var self = this;
    self.registration = RegistrationData.get();
  }]);
