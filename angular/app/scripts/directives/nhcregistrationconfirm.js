'use strict';

/**
 * @ngdoc directive
 * @name nhcWebApp.directive:nhcRegistrationConfirm
 * @description
 * # nhcRegistrationConfirm
 */
angular.module('nhcWebApp')
  .directive('nhcRegistrationConfirm', function () {
      return {
            templateUrl: 'views/nhcregistrationconfirm.html',
            restrict: 'E',
            controller: 'RegistrationConfirmCtrl',
            controllerAs: 'ctrl',
            scope: {},
            bindToController: true
        };
    });
