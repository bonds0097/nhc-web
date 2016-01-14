'use strict';

/**
 * @ngdoc directive
 * @name nhcWebApp.directive:nhcAdminUsers
 * @description
 * # nhcAdminUsers
 */
angular.module('nhcWebApp')
  .directive('nhcAdminUsers', function () {
        return {
            templateUrl: 'views/adminusers.html',
            restrict: 'E',
            controller: 'AdminUsersCtrl',
            controllerAs: 'ctrl',
            scope: {},
            bindToController: true
        };
    });
