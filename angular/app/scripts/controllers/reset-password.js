'use strict';

/**
 * @ngdoc function
 * @name nhcWebApp.controller:ResetPasswordCtrl
 * @description
 * # ResetPasswordCtrl
 * Controller of the nhcWebApp
 */
angular.module('nhcWebApp')
    .controller('ResetPasswordCtrl', ['Password', 'AlertService', 'UserService', '$routeParams',
      '$auth', '$location',
        function(Password, AlertService, UserService, $routeParams, $auth, $location) {
            var self = this;

            self.alerts = AlertService;
            self.user = UserService;

            self.css = {
                labelWidth: '3',
                inputWidth: '6',
                addonWidth: '1'
            };

            self.resetPassword = function(newPassword, confirmPassword) {
                Password.reset(null, {
                    code: $routeParams.code,
                    newPassword: newPassword,
                    confirmPassword: confirmPassword
                }).$promise.then(function(response) {
                  console.log(response);
                    if (!$auth.isAuthenticated() && response.token) {
                        $auth.setToken(response.token);
                    }

                    self.user.refreshUser();
                    AlertService.addAlert({
                        message: 'Your password has been successfully changed.',
                        type: 'success'
                    });

                    $location.url('/');
                }, function(errResponse) {
                    if (errResponse.status === 404) {
                        AlertService.addAlert({
                            message: 'Invalid reset password code.',
                            type: 'danger'
                        });

                        $auth.logout();
                        $location.url('/');
                    } else if (errResponse.status === 400) {
                        AlertService.addAlert({
                            message: 'Password fields did not match. Please try again.',
                            type: 'danger'
                        });
                    } else {
                        AlertService.addAlert({
                            message: 'Something went wrong. Please try again.',
                            type: 'danger'
                        });
                    }
                });
            };
        }
    ]);
