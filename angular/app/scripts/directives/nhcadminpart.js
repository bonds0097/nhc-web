'use strict';

/**
 * @ngdoc directive
 * @name nhcWebApp.directive:nhcAdminPart
 * @description
 * # nhcAdminPart
 */
angular.module('nhcWebApp')
  .directive('nhcAdminPart', function () {
       return {
            templateUrl: 'views/adminpart.html',
            restrict: 'E',
            controller: 'AdminPartCtrl',
            controllerAs: 'ctrl',
            scope: {},
            bindToController: true
        };
    });
