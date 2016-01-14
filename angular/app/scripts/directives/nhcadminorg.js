'use strict';

/**
 * @ngdoc directive
 * @name nhcWebApp.directive:nhcAdminOrg
 * @description
 * # nhcAdminOrg
 */
angular.module('nhcWebApp')
  .directive('nhcAdminOrg', function () {
        return {
            templateUrl: 'views/adminorg.html',
            restrict: 'E',
            controller: 'AdminOrgCtrl',
            controllerAs: 'ctrl',
            scope: {},
            bindToController: true
        };
    });
