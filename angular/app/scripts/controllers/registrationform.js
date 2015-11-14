'use strict';

/**
 * @ngdoc function
 * @name nhcWebApp.controller:RegistrationformctrlCtrl
 * @description
 * # RegistrationformctrlCtrl
 * Controller of the nhcWebApp
 */
angular.module('nhcWebApp')
  .controller('RegistrationFormCtrl', [function () {
        var self = this;

        self.css = {
            labelWidth: '2',
            inputWidth: '6',
            addonWidth: '1'
        };

        self.isUserOrg = true;
  }]);
