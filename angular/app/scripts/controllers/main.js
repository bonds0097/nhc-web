'use strict';

/**
 * @ngdoc function
 * @name nhcWebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nhcWebApp
 */
angular.module('nhcWebApp')
  .controller('MainCtrl', ['Resources', function (Resources) {
    var self = this;
    self.resources = Resources.get();
  }]);
