'use strict';

/**
 * @ngdoc directive
 * @name nhcWebApp.directive:nhcBonusQuestion
 * @description
 * # nhcBonusQuestion
 */
angular.module('nhcWebApp')
  .directive('nhcBonusQuestion', function () {
        return {
            templateUrl: 'views/bonusquestion.html',
            restrict: 'E',
            controller: 'BonusQuestionCtrl',
            controllerAs: 'ctrl',
            scope: {},
            bindToController: true
        };
    });
