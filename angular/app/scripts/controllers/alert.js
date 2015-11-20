'use strict';

/**
 * @ngdoc function
 * @name nhcWebApp.controller:NhcalertCtrl
 * @description
 * # NhcalertCtrl
 * Controller of the nhcWebApp
 */
angular.module('nhcWebApp')
  .controller('AlertCtrl', ['AlertService', function (AlertService) {
    var self = this;

    self.Alerts = function() {
      return AlertService.getAlerts();
    };

    self.dismissAlert = function(index) {
      AlertService.delAlert(index);
    };
  }]);
