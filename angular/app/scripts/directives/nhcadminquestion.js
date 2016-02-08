'use strict';

/**
 * @ngdoc directive
 * @name nhcWebApp.directive:nhcAdminQuestion
 * @description
 * # nhcAdminQuestion
 */
angular.module('nhcWebApp')
  .directive('nhcAdminQuestion', function () {
        return {
            templateUrl: 'views/adminquestion.html',
            restrict: 'E',
            controller: 'AdminQuestionCtrl',
            controllerAs: 'ctrl',
            scope: {},
            bindToController: true
        };
    });
