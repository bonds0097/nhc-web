'use strict';

/**
 * @ngdoc directive
 * @name nhcWebApp.directive:nhcRegistrationSignup
 * @description
 * # nhcRegistrationSignup
 */
angular.module('nhcWebApp')
    .directive('nhcRegistrationSignup', function() {
        return {
            templateUrl: 'views/registrationsignup.html',
            restrict: 'E',
            controller: 'RegistrationSignupCtrl',
            controllerAs: 'ctrl',
            scope: {},
            bindToController: true
        };
    });
