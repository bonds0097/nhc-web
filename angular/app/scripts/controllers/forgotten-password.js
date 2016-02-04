'use strict';

/**
 * @ngdoc function
 * @name nhcWebApp.controller:ForgottenPasswordCtrl
 * @description
 * # ForgottenPasswordCtrl
 * Controller of the nhcWebApp
 */
angular.module('nhcWebApp')
    .controller('ForgottenPasswordCtrl', ['Password', 'AlertService', function(Password, AlertService) {
        var self = this;

        self.alerts = AlertService;

        self.forgotPassword = function(email) {
            Password.forgot(null, {
                email: email
            }).$promise.then(function() {
                self.alerts.addAlert({
                    type: 'warning',
                    message: 'Request sent. If that email exists in our database, you will receive' +
                        ' a link to reset your password.'
                });
            }, function() {
                self.alerts.addAlert({
                    type: 'danger',
                    message: 'Something went wrong. Please try again later.'
                });
            });
        };
    }]);
