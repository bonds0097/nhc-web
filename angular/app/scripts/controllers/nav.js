'use strict';

/**
 * @ngdoc function
 * @name nhcWebApp.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller of the nhcWebApp
 */
angular.module('nhcWebApp')
  .controller('NavCtrl', ['UserService', function (UserService) {
    var self = this;
    self.user = UserService;
  }]);
