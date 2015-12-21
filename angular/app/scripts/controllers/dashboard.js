'use strict';

/**
 * @ngdoc function
 * @name nhcWebApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the nhcWebApp
 */
angular.module('nhcWebApp')
  .controller('DashboardCtrl', ['Participants', '$uibModal', 'Globals', function (Participants, $uibModal, Globals) {
    var self = this;
    self.participants = Participants.get();
    self.globals = Globals.get();

    self.openScorecard = function(participant) {
      $uibModal.open({
                    templateUrl: 'views/scorecardmodal.html',
                    controller: 'ScorecardmodalCtrl as ctrl',
                    resolve: {
                        participant: function() {
                            return participant;
                        }
                    },
                });
    };
  }]);
