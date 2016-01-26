'use strict';

/**
 * @ngdoc function
 * @name nhcWebApp.controller:AdminglobalsCtrl
 * @description
 * # AdminglobalsCtrl
 * Controller of the nhcWebApp
 */
angular.module('nhcWebApp')
    .controller('AdminGlobalsCtrl', ['Globals', 'AlertService', function(Globals, AlertService) {
        var self = this;

        self.globals = Globals.get();
        self.alerts = AlertService;

        self.css = {
            labelWidth: '2',
            inputWidth: '6',
            addonWidth: '1'
        };

        self.openStart = function() {
            self.startOpened = true;
        };

        self.openEnd = function() {
            self.endOpened = true;
        };

        self.saveSettings = function() {
            var globals = new Globals(self.globals);
            globals.$save().then(function() {
                self.alerts.addAlert({
                    type: 'success',
                    message: 'Settings saved.'
                });
            }, function(errResponse) {
                self.alerts.addAlert({
                    type: 'danger',
                    message: 'Failed to save settings: ' + errResponse.data.error
                });
            });
        };
    }]);
