'use strict';

/**
 * @ngdoc function
 * @name nhcWebApp.controller:AdminnewsCtrl
 * @description
 * # AdminnewsCtrl
 * Controller of the nhcWebApp
 */
angular.module('nhcWebApp')
    .controller('AdminNewsCtrl', ['News', 'AlertService', function(News, AlertService) {
        var self = this;

        self.alerts = AlertService;

        self.news = News.list();

        self.reset = function(form) {
            if (form) {
                form.$setPristine();
                form.$setUntouched();
            }

            self.newUpdate = {
                published: false,
                adminOnly: false,
                subject: '',
                body: ''
            };
        };

        self.reset();

        self.saveUpdate = function(form) {
            var news = new News(self.newUpdate);
            news.$save().then(function() {
                self.alerts.addAlert({
                    type: 'success',
                    message: 'Update successfully saved.'
                });

                self.news = News.list();
                self.reset(form);
            }, function(errResponse) {
                self.alerts.addAlert({
                    type: 'danger',
                    message: 'Unable to save update: ' +
                        errResponse.data.error
                });
            });
        };

        self.delete = function(id) {
            News.delete({
                id: id
            }).$promise.then(function() {
                self.alerts.addAlert({
                    type: 'success',
                    message: 'Item successfully deleted.'
                });

                self.news = News.list();
            }, function(errResponse) {
                self.alerts.addAlert({
                    type: 'danger',
                    message: 'Unable to delete item: ' +
                        errResponse.data.error
                });
            });
        };

        self.publish = function(id) {
            News.publish({
                id: id
            }, null).$promise.then(function() {
                self.alerts.addAlert({
                    type: 'success',
                    message: 'Item successfully published.'
                });

                self.news = News.list();
            }, function(errResponse) {
                self.alerts.addAlert({
                    type: 'danger',
                    message: 'Unable to publish item: ' +
                        errResponse.data.error
                });
            });
        };

        self.unpublish = function(id) {
          console.log(id);
            News.unpublish({
                id: id
            }, null).$promise.then(function() {
                self.alerts.addAlert({
                    type: 'success',
                    message: 'Item successfully unpublished.'
                });

                self.news = News.list();
            }, function(errResponse) {
                self.alerts.addAlert({
                    type: 'danger',
                    message: 'Unable to unpublish item: ' +
                        errResponse.data.error
                });
            });
        };
    }]);
