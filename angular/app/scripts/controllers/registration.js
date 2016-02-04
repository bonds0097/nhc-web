'use strict';

/**
 * @ngdoc function
 * @name nhcWebApp.controller:RegistrationCtrl
 * @description
 * # RegistrationCtrl
 * Controller of the nhcWebApp
 */
angular.module('nhcWebApp')
    .controller('RegistrationCtrl', ['UserService', 'Globals', function(UserService, Globals) {
        var self = this;
        self.user = UserService;

        self.globals = Globals.get();
    }]);
