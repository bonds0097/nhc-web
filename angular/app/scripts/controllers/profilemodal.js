'use strict';

/**
 * @ngdoc function
 * @name nhcWebApp.controller:ProfilemodalCtrl
 * @description
 * # ProfilemodalCtrl
 * Controller of the nhcWebApp
 */
angular.module('nhcWebApp')
    .controller('ProfileModalCtrl', ['UserService', 'Organizations', '$uibModalInstance', 'Users',
        'AlertService',
        function(UserService, Organizations, $uibModalInstance, Users, AlertService) {
            var self = this;

            self.user = UserService;
            self.organizations = Organizations.get();
            self.alert = AlertService;

            self.cancel = function() {
                $uibModalInstance.dismiss('User cancelled.');
            };

            self.save = function() {
                var user = new Users(self.user.currentUser());
                user.$updateSelf().then(function() {
                    self.alert.addAlert({
                        type: 'success',
                        message: 'Profile updated successfully.'
                    });
                    self.user.refreshUser();
                    $uibModalInstance.close('User updated successfully');
                }, function(errorResponse) {
                    self.alert.addAlert({
                        type: 'danger',
                        message: 'Failed to update profile: ' +
                            errorResponse.data.error
                    });
                    $uibModalInstance.close('Failed to update user.');
                });
            };
        }
    ]);
