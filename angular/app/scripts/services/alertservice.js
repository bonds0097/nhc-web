'use strict';

/**
 * @ngdoc service
 * @name nhcWebApp.AlertService
 * @description
 * # AlertService
 * Factory in the nhcWebApp.
 */
angular.module('nhcWebApp')
    .factory('AlertService', function() {
        // Service logic
        var alerts = [];

        var clearAlerts = function() {
          alerts = [];
        };

        var addAlert = function(alert) {
          alerts.push(alert);
        };

        var delAlert = function(index) {
          alerts.splice(index, 1);
        };

        // Public API here
        return {
            getAlerts: function() {
                return alerts;
            },
            clearAlerts: clearAlerts,
            addAlert: addAlert,
            delAlert: delAlert
        };
    });
