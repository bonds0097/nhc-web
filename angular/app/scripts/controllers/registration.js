'use strict';

/**
 * @ngdoc function
 * @name nhcWebApp.controller:RegistrationCtrl
 * @description
 * # RegistrationCtrl
 * Controller of the nhcWebApp
 */
angular.module('nhcWebApp')
    .controller('RegistrationCtrl', ['UserService', function(UserService) {
        var self = this;

        self.User = UserService;

        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    }]);
