'use strict';

/**
 * @ngdoc function
 * @name nhcWebApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the nhcWebApp
 */
angular.module('nhcWebApp')
  .controller('LoginCtrl', ['UserService', function (UserService) {
    var self = this;
    self.user = UserService;
  }]);
