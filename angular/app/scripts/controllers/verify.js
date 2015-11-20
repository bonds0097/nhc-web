'use strict';

/**
 * @ngdoc function
 * @name nhcWebApp.controller:VerifyCtrl
 * @description
 * # VerifyCtrl
 * Controller of the nhcWebApp
 */
angular.module('nhcWebApp')
    .controller('VerifyCtrl', ['UserService', '$routeParams', '$location', 'AlertService', '$auth',
        function(UserService, $routeParams, $location, AlertService, $auth) {
            var self = this;

            self.user = UserService;

            self.user.verifyUser($routeParams.code).then(function(response) {
                if (!$auth.isAuthenticated()) {
                  $auth.setToken(response.data.token);
                }

                self.user.refreshUser();
                AlertService.addAlert({
                    message: 'E-Mail verified, you can now register!',
                    type: 'success'
                });

                $location.url('/registration');
            }, function(errResponse) {
                if (errResponse.status === 404) {
                    AlertService.addAlert({
                        message: 'Incorrect verification code. Please try again.',
                        type: 'danger'
                    });

                } else {
                    AlertService.addAlert({
                        message: 'Something went wrong. Please try again.',
                        type: 'danger'
                    });
                }
            });
        }
    ]);
