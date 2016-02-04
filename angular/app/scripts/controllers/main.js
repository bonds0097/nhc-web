'use strict';

/**
 * @ngdoc function
 * @name nhcWebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nhcWebApp
 */
angular.module('nhcWebApp')
  .controller('MainCtrl', ['Resources','Globals', function (Resources, Globals) {
    var self = this;

    self.resources = Resources.get();
    self.globals = Globals.get();
  }]);
