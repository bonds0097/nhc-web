'use strict';

/**
 * @ngdoc function
 * @name nhcWebApp.controller:RegistrationsignupctrlCtrl
 * @description
 * # RegistrationsignupctrlCtrl
 * Controller of the nhcWebApp
 */
angular.module('nhcWebApp')
    .controller('RegistrationSignupCtrl', ['$auth', '$uibModal', 'AlertService', 'UserService',
        function($auth, $uibModal, AlertService, UserService) {
            var self = this;

            self.Alerts = AlertService;


            // Signup User in a Modal Window
            self.signupEmailModal = function() {

                var modalInstance = $uibModal.open({
                    templateUrl: 'views/registrationsignupemailmodal.html',
                    controller: 'RegistrationsignupemailmodalCtrl as ctrl',
                    size: 'sm'
                });

                modalInstance.result.then(function(user) {
                    $auth.signup(user).then(function(response) {
                        $auth.setToken(response.data.token);
                        UserService.refreshUser();
                    }, function(error) {
                        if (error.status === 400) {
                            self.Alerts.addAlert({
                                message: error.data.error,
                                type: 'danger'
                            });
                        } else {
                            self.Alerts.addAlert({
                                message: error.data.error,
                                type: 'warning'
                            });
                        }
                    });
                });
            };

            self.authenticate = function(provider) {
                UserService.currentUser().status = "undefined";
                $auth.authenticate(provider).then(function() {
                    UserService.refreshUser();
                }, function(errResponse) {
                    UserService.currentUser().status = "unauthed";
                    if (errResponse.status === 400 || errResponse.status === 409) {
                        self.Alerts.addAlert({
                            message: errResponse.data.error,
                            type: 'danger'
                        });
                    } else if (errResponse.status === 500) {
                        self.Alerts.addAlert({
                            message: 'Uh oh. Looks like something went wrong on our side. Please try again later.',
                            type: 'danger'
                        });
                    } else {
                        self.Alerts.addAlert({
                            message: errResponse.data.error,
                            type: 'warning'
                        });
                    }
                });
            };
        }
    ]);
