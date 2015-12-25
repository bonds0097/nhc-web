'use strict';

/**
 * @ngdoc function
 * @name nhcWebApp.controller:SignupverifyCtrl
 * @description
 * # SignupverifyCtrl
 * Controller of the nhcWebApp
 */
angular.module('nhcWebApp')
    .controller('SignupverifyCtrl', ['AuthService', 'AlertService', function(AuthService, AlertService) {
        var self = this;

        self.resend = function() {
            AuthService.resendVerify().$promise.then(function(response) {
                AlertService.addAlert({
                    message: response.status,
                    type: 'success'
                });
            }, function(errResponse) {
                AlertService.addAlert({
                    message: errResponse.error,
                    type: 'danger'
                });
            });
        };
    }]);
