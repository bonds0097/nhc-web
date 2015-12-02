'use strict';

/**
 * @ngdoc function
 * @name nhcWebApp.controller:LoginmodalCtrl
 * @description
 * # LoginmodalCtrl
 * Controller of the nhcWebApp
 */
angular.module('nhcWebApp')
    .controller('LoginmodalCtrl', ['$auth', 'UserService', 'AlertService', '$uibModalInstance',
        function($auth, UserService, AlertService, $uibModalInstance) {
            var self = this;

            self.Alerts = AlertService;

            self.loginEmail = function(user) {
                $auth.login(user)
                    .then(function() {
                        UserService.refreshUser();
                        self.Alerts.clearAlerts();
                    })
                    .catch(function(errResponse) {
                        self.Alerts.clearAlerts();
                        UserService.currentUser().status = "unauthed";
                        if (errResponse.status === 400 || errResponse.status === 401) {
                            self.Alerts.addAlert({
                                message: "Incorrect username or password.",
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

                $uibModalInstance.close();
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

                $uibModalInstance.close();
            };
        }
    ]);
