'use strict';

/**
 * @ngdoc function
 * @name nhcWebApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the nhcWebApp
 */
angular.module('nhcWebApp')
    .controller('LoginCtrl', ['UserService', '$uibModal', '$auth',
        function(UserService, $uibModal, $auth) {
            var self = this;
            self.user = UserService;

            self.signOut = function() {
                $auth.logout();
                self.user.refreshUser();
            };

            // Signup User in a Modal Window
            self.loginModal = function() {

                $uibModal.open({
                    templateUrl: 'views/loginmodal.html',
                    controller: 'LoginmodalCtrl as ctrl',
                    size: 'sm'
                });
            };
        }
    ]);
