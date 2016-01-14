'use strict';

/**
 * @ngdoc function
 * @name nhcWebApp.controller:AdminCtrl
 * @description
 * # AdminCtrl
 * Controller of the nhcWebApp
 */
angular.module('nhcWebApp')
    .controller('AdminCtrl', [ 'UserService', function(UserService) {
        var self = this;

        self.isAdmin = UserService.isAdmin;
        self.isGlobalAdmin = UserService.isGlobalAdmin;

        self.selectedTab = 'default';

        self.selectTab = function(tab) {
          self.selectedTab = tab;
        };
    }]);
