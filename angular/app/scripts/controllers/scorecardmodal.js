'use strict';

/**
 * @ngdoc function
 * @name nhcWebApp.controller:ScorecardmodalCtrl
 * @description
 * # ScorecardmodalCtrl
 * Controller of the nhcWebApp
 */
angular.module('nhcWebApp')
    .controller('ScorecardmodalCtrl', ['participant', '$uibModalInstance', 'Globals', 'Moment',
      'lodash',
        function(participant, $uibModalInstance, Globals, Moment, lodash) {
            var self = this;
            self.participant = participant;

            self.globals = Globals.get();
            self.moment = Moment;

            self.sum = lodash.sum;
            self.flatten = lodash.flattenDeep;

            self.close = function() {
                $uibModalInstance.dismiss('Closed by user.');
            };

            self.updateScorecard = function() {
                $uibModalInstance.close(participant);
            };
        }
    ]);
