'use strict';

/**
 * @ngdoc function
 * @name nhcWebApp.controller:AdminquestionCtrl
 * @description
 * # AdminquestionCtrl
 * Controller of the nhcWebApp
 */
angular.module('nhcWebApp')
    .controller('AdminQuestionCtrl', ['Questions', 'AlertService', 'lodash', '$uibModal',
        function(Questions, AlertService, lodash, $uibModal) {
            var self = this;

            self.alerts = AlertService;
            self.questions = Questions.get();

            self.reset = function(form) {
                if (form) {
                    form.$setPristine();
                    form.$setUntouched();
                }

                self.newQuestion = {
                    text: '',
                    answers: ['']
                };
            };

            self.reset();

            self.addAnswer = function() {
                self.newQuestion.answers.push("");
            };

            self.saveQuestion = function(form) {
                // Make sure question has answer.
                if (lodash.indexOf(self.newQuestion.answers, self.newQuestion.correctAnswer) === -1) {
                    self.alerts.addAlert({
                        type: 'danger',
                        message: 'Please select a correct answer.'
                    });
                    return;
                }

                if (self.newQuestion.answers.length < 2) {
                    self.alerts.addAlert({
                        type: 'danger',
                        message: 'You need at least two possible answers.'
                    });
                    return;
                }

                var question = new Questions(self.newQuestion);
                question.$save().then(function() {
                    self.alerts.addAlert({
                        type: 'success',
                        message: 'Question successfully created.'
                    });
                    self.reset(form);
                    self.questions = Questions.get();
                }, function(errResponse) {
                    self.alerts.addAlert({
                        type: 'danger',
                        message: 'Failed to create question: ' + errResponse.data.error
                    });
                });
            };

            self.enableQuestion = function(id) {
                if (!id) {
                  self.alerts.addAlert({
                        type: 'danger',
                        message: 'Select a question to enable.'
                    });
                  return;
                }

                Questions.enable({
                    id: id
                }, null).$promise.then(function() {
                    self.alerts.addAlert({
                        type: 'success',
                        message: 'Question successfully enabled.'
                    });
                    self.questions = Questions.get();
                }, function(errResponse) {
                    self.alerts.addAlert({
                        type: 'danger',
                        message: 'Failed to enable question: ' + errResponse.data.error
                    });
                });
            };

            self.disableQuestions = function() {
                Questions.disable(null, null).$promise.then(function() {
                    self.alerts.addAlert({
                        type: 'success',
                        message: 'Questions successfully disabled.'
                    });
                    self.questions = Questions.get();
                }, function(errResponse) {
                    self.alerts.addAlert({
                        type: 'danger',
                        message: 'Failed to disable questions: ' + errResponse.data.error
                    });
                });
            };

            self.deleteQuestion = function(id) {
                if (!id) {
                  self.alerts.addAlert({
                        type: 'danger',
                        message: 'Select a question to delete.'
                    });
                  return;
                }

                Questions.delete({
                    id: id
                }).$promise.then(function() {
                    self.alerts.addAlert({
                        type: 'success',
                        message: 'Question successfully deleted.'
                    });
                    self.questions = Questions.get();
                }, function(errResponse) {
                    self.alerts.addAlert({
                        type: 'danger',
                        message: 'Failed to delete question: ' + errResponse.data.error
                    });
                });
            };

            self.viewRespondents = function(respondents) {
              $uibModal.open({
                    controller: 'QuestionRespModalCtrl as ctrl',
                    resolve: {
                        respondents: function() {
                            return respondents;
                        }
                    },
                    templateUrl: 'views/questionrespmodal.html'
                });
            };
        }
    ]);
