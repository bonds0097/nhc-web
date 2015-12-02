'use strict';

/**
 * @ngdoc function
 * @name nhcWebApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the nhcWebApp
 */
angular.module('nhcWebApp')
    .controller('LoginCtrl', ['UserService', '$uibModal',
        function(UserService, $uibModal) {
            var self = this;
            self.user = UserService;

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
