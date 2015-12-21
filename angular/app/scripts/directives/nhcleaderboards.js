'use strict';

/**
 * @ngdoc directive
 * @name nhcWebApp.directive:nhcLeaderboards
 * @description
 * # nhcLeaderboards
 */
angular.module('nhcWebApp')
    .directive('nhcLeaderboards', function() {
        return {
            templateUrl: 'views/leaderboards.html',
            restrict: 'E',
            controller: 'LeaderboardsCtrl',
            controllerAs: 'ctrl',
            scope: {},
            bindToController: true
        };
    });
