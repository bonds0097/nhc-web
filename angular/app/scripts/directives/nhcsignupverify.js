'use strict';

/**
 * @ngdoc directive
 * @name nhcWebApp.directive:nhcSignupVerify
 * @description
 * # nhcSignupVerify
 */
angular.module('nhcWebApp')
    .directive('nhcSignupVerify', function() {
        return {
            templateUrl: 'views/signupverify.html',
            restrict: 'E',
            controller: 'SignupverifyCtrl',
            controllerAs: 'ctrl',
            scope: {},
            bindToController: true
        };
    });
