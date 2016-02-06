'use strict';

/**
 * @ngdoc function
 * @name nhcWebApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the nhcWebApp
 */
angular.module('nhcWebApp')
    .controller('DashboardCtrl', ['Participants', '$uibModal', 'Globals', 'AlertService', 'News',
        'lodash',
        function(Participants, $uibModal, Globals, AlertService, News, lodash) {
            var self = this;

            self.alerts = AlertService;
            self.participants = Participants.get();
            self.globals = Globals.get();
            self.news = News.get();

            self.sortByDate = function(array) {
                return lodash.reverse(lodash.sortBy(array, 'publishDate'));
            };

            self.openScorecard = function(participant) {
                var scorecard = $uibModal.open({
                    templateUrl: 'views/scorecardmodal.html',
                    controller: 'ScorecardmodalCtrl as ctrl',
                    resolve: {
                        participant: function() {
                            return participant;
                        }
                    },
                });

                scorecard.result.then(function(participant) {
                    var data = new Participants(participant);
                    data.$updateScorecard().then(function() {
                        self.alerts.addAlert({
                            type: 'success',
                            message: participant.firstName + '\'s scorecard was successfully updated.'
                        });
                        self.participants = Participants.get();
                    }, function(errResponse) {
                        self.alerts.addAlert({
                            type: 'danger',
                            message: 'Failed to update scorecard: ' + errResponse.data.error
                        });
                    });
                });
            };
        }
    ]);
