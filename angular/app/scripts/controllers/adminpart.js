'use strict';

/**
 * @ngdoc function
 * @name nhcWebApp.controller:AdminpartCtrl
 * @description
 * # AdminpartCtrl
 * Controller of the nhcWebApp
 */
angular.module('nhcWebApp')
    .controller('AdminPartCtrl', ['UserService', 'Participants', 'lodash', function(UserService, Participants, lodash) {
        var self = this;

        self.user = UserService;
        self.enableAdvanced = self.user.isGlobalAdmin();

        self.gridOptions = {
            enableRowSelection: self.enableAdvanced,
            multiSelect: self.enableAdvanced,
            enableRowHeaderSelection: self.enableAdvanced,
            enableSelectAll: self.enableAdvanced,
            showGridFooter: true,
            enableFiltering: true,
            enableGridMenu: true,
            exporterCsvFilename: 'nhc_participants.csv',
            exporterMenuPdf: false
        };

        self.loadParticipants = function() {
            Participants.getAdmin().$promise.then(
                function(data) {
                    self.gridOptions.data = lodash.sortBy(data, 'lastName');
                }
            );
        };

        self.loadParticipants();

        self.gridOptions.columnDefs = [{
            name: 'firstName',
            width: '10%'
        }, {
            name: 'lastName',
            width: '10%'
        }, {
            name: 'category',
            width: '15%'
        }, {
            name: 'commitment'
        }, {
            name: 'points',
            type: 'number',
            width: '5%'
        }];
    }]);
