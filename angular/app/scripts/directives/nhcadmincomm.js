'use strict';

/**
 * @ngdoc directive
 * @name nhcWebApp.directive:nhcAdminComm
 * @description
 * # nhcAdminComm
 */
angular.module('nhcWebApp')
  .directive('nhcAdminComm', function () {
        return {
            templateUrl: 'views/admincomm.html',
            restrict: 'E',
            controller: 'AdminCommCtrl',
            controllerAs: 'ctrl',
            scope: {},
            bindToController: true
        };
    });
