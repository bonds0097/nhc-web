'use strict';

/**
 * @ngdoc directive
 * @name nhcWebApp.directive:nhcLoading
 * @description
 * # nhcLoading
 */
angular.module('nhcWebApp')
  .directive('nhcLoading', function () {
    return {
      templateUrl: 'views/nhcloading.html',
      restrict: 'E',
    };
  });
