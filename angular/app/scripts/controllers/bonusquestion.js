'use strict';

/**
 * @ngdoc function
 * @name nhcWebApp.controller:BonusquestionCtrl
 * @description
 * # BonusquestionCtrl
 * Controller of the nhcWebApp
 */
angular.module('nhcWebApp')
    .controller('BonusQuestionCtrl', ['Questions', 'AlertService',
        function(Questions, AlertService) {
            var self = this;

            self.alerts = AlertService;
            self.userQuestion = Questions.fetch();

            self.submitAnswer = function(answer) {
                var question = new Questions({
                    answer: answer
                });
                question.$answer().then(function(response) {
                    console.log(response);
                    self.alerts.addAlert({
                        type: 'success',
                        message: response.status
                    });
                    self.userQuestion.enabled = false;
                }, function() {
                    self.alerts.addAlert({
                        type: 'success',
                        message: 'Sorry, but we couldn\'t submit your answer, please try again later.'
                    });
                });
            };
        }
    ]);
