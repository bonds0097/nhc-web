'use strict';

/**
 * @ngdoc function
 * @name nhcWebApp.controller:RegistrationsignupemailmodalCtrl
 * @description
 * # RegistrationsignupemailmodalCtrl
 * Controller of the nhcWebApp
 */
angular.module('nhcWebApp')
    .controller('RegistrationsignupemailmodalCtrl', ['$uibModalInstance', function($uibModalInstance) {
        var self = this;

        self.user = {
          firstName: '',
          lastName: '',
          email: '',
          password: '',
        };

        self.css = {
            labelWidth: '4',
            inputWidth: '8'
        };

        self.cancel = function() {
          $uibModalInstance.dismiss("User canceled signup.");
        };

        self.signup = function() {
          $uibModalInstance.close(self.user);
        };
    }]);
