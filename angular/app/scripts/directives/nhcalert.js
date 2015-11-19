'use strict';

/**
 * @ngdoc directive
 * @name nhcWebApp.directive:nhcAlert
 * @description
 * # nhcAlert
 */
angular.module('nhcWebApp')
    .directive('nhcAlert', function() {
        return {
            templateUrl: 'views/nhcalert.html',
            restrict: 'E',
            controller: 'AlertCtrl',
            controllerAs: 'ctrl',
            scope: {},
            bindToController: true
        };
    });
