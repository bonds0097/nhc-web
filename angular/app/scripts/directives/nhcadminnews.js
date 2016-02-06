'use strict';

/**
 * @ngdoc directive
 * @name nhcWebApp.directive:nhcAdminNews
 * @description
 * # nhcAdminNews
 */
angular.module('nhcWebApp')
  .directive('nhcAdminNews', function () {
        return {
            templateUrl: 'views/adminnews.html',
            restrict: 'E',
            controller: 'AdminNewsCtrl',
            controllerAs: 'ctrl',
            scope: {},
            bindToController: true
        };
    });
