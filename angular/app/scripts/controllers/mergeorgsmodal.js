'use strict';

/**
 * @ngdoc function
 * @name nhcWebApp.controller:MergeorgsmodalCtrl
 * @description
 * # MergeorgsmodalCtrl
 * Controller of the nhcWebApp
 */
angular.module('nhcWebApp')
    .controller('MergeOrgsModalCtrl', ['name', '$uibModalInstance', function(name, $uibModalInstance) {
        var self = this;
        self.name = name;

        self.merge = function() {
            $uibModalInstance.close(self.name);
        };
    }]);
