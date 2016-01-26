'use strict';

/**
 * @ngdoc function
 * @name nhcWebApp.controller:AddorgmodalCtrl
 * @description
 * # AddorgmodalCtrl
 * Controller of the nhcWebApp
 */
angular.module('nhcWebApp')
    .controller('AddOrgModalCtrl', ['$uibModalInstance', function($uibModalInstance) {
        var self = this;

        self.addOrg = function() {
            $uibModalInstance.close(self.orgName);
        };

        self.cancel = function() {
          $uibModalInstance.dismiss();
        };

    }]);
