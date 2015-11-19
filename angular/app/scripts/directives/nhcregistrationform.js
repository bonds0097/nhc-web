'use strict';

/**
 * @ngdoc directive
 * @name nhcWebApp.directive:nhcRegistrationForm
 * @description
 * # nhcRegistrationForm
 */
angular.module('nhcWebApp')
    .directive('nhcRegistrationForm', function() {
        return {
            templateUrl: 'views/registrationform.html',
            restrict: 'E',
            controller: 'RegistrationFormCtrl',
            controllerAs: 'ctrl',
            scope: {},
            bindToController: true
        };
    });
