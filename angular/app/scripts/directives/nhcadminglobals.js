'use strict';

/**
 * @ngdoc directive
 * @name nhcWebApp.directive:nhcAdminGlobals
 * @description
 * # nhcAdminGlobals
 */
angular.module('nhcWebApp')
  .directive('nhcAdminGlobals', function () {
        return {
            templateUrl: 'views/adminglobals.html',
            restrict: 'E',
            controller: 'AdminGlobalsCtrl',
            controllerAs: 'ctrl',
            scope: {},
            bindToController: true
        };
    });
