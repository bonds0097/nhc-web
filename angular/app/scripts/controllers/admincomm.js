'use strict';

/**
 * @ngdoc function
 * @name nhcWebApp.controller:AdmincommCtrl
 * @description
 * # AdmincommCtrl
 * Controller of the nhcWebApp
 */
angular.module('nhcWebApp')
    .controller('AdminCommCtrl', ['Communications', 'UserService', 'AlertService',
        function(Communications, UserService, AlertService) {
            var self = this;

            self.user = UserService;
            self.alerts = AlertService;

            self.reset = function(form) {
                if (form) {
                    form.$setPristine();
                    form.$setUntouched();
                }

                self.sendUnregistered = true;
                self.sendUnconfirmed = true;
                self.sendRegistered = true;

                self.sendUser = true;
                self.sendOrgAdmin = true;
                self.sendGlobalAdmin = false;

                self.messageSubject = '';
                self.messageBody = '';
            };

            self.reset();

            self.clearMessage = function(form) {
                self.reset(form);
            };

            self.sendMessage = function(form) {
                var sendRole = [];
                var sendStatus = [];

                if (self.sendUnregistered) {
                    sendStatus.push('unregistered');
                }

                if (self.sendUnconfirmed) {
                    sendStatus.push('unconfirmed');
                }

                if (self.sendRegistered) {
                    sendStatus.push('registered');
                }

                if (self.sendUser) {
                    sendRole.push("user");
                }

                if (self.sendOrgAdmin) {
                  sendRole.push("org_admin");
                  sendRole.push("super_org_admin");
                }

                if (self.sendGlobalAdmin) {
                  sendRole.push("global_admin");
                  sendRole.push("super_global_admin");
                }


                var message = new Communications({
                    subject: self.messageSubject,
                    body: self.messageBody,
                    status: sendStatus,
                    roles: sendRole
                });

                message.$sendMessage().then(function() {
                  self.alerts.addAlert({message:"Message successfully sent.", type:"success"});
                  self.reset(form);
                }, function() {
                  self.alerts.addAlert({message:"Failed to send message. Please try again.", type:"danger"});
                });
            };

        }
    ]);
