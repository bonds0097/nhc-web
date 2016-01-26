'use strict';

/**
 * @ngdoc function
 * @name nhcWebApp.controller:AdminorgCtrl
 * @description
 * # AdminorgCtrl
 * Controller of the nhcWebApp
 */
angular.module('nhcWebApp')
    .controller('AdminOrgCtrl', ['Organizations', 'UserService', 'AlertService', 'uiGridConstants',
        'lodash', '$uibModal',
        function(Organizations, UserService, AlertService, uiGridConstants, lodash, $uibModal) {
            var self = this;

            self.user = UserService;
            self.enableAdvanced = self.user.isGlobalAdmin();
            self.alerts = AlertService;

            self.selectedOrgs = [];
            self.isEmpty = lodash.isEmpty;

            self.gridOptions = {
                enableRowSelection: self.enableAdvanced,
                multiSelect: self.enableAdvanced,
                enableRowHeaderSelection: self.enableAdvanced,
                enableSelectAll: false,
                showGridFooter: true,
                enableFiltering: true,
            };

            self.loadOrgs = function() {
                Organizations.get().$promise.then(
                    function(data) {
                        self.gridOptions.data = lodash.sortBy(data, 'name');
                    }
                );
            };

            self.loadOrgs();

            self.gridOptions.columnDefs = [{
                name: 'name',
                cellEditableCondition: self.enableAdvanced,
                width: '75%'
            }, {
                name: 'needsApproval',
                displayName: 'Needs Approval',
                visible: self.enableAdvanced,
                type: 'boolean',
                cellTemplate: '<input type="checkbox" ng-model="row.entity.needsApproval" ng-click="grid.appScope.ctrl.updateOrg(row)">',
                width: '25%',
                enableFiltering: false
            }];

            self.gridOptions.onRegisterApi = function(gridApi) {
                self.gridApi = gridApi;
                gridApi.selection.on.rowSelectionChanged(null, function(row) {
                    if (row.isSelected) {
                        self.selectedOrgs.push(row.entity);
                    } else {
                        self.selectedOrgs.splice(self.selectedOrgs.indexOf(row.entity), 1);
                    }
                });

                gridApi.rowEdit.on.saveRow(null, self.editOrg);

            };

            self.addOrg = function() {
                var modalInstance = $uibModal.open({
                    templateUrl: 'views/addorgmodal.html',
                    controller: 'AddOrgModalCtrl as ctrl',
                    size: 'sm'
                });

                modalInstance.result.then(function(name) {
                    var org = new Organizations({
                        name: name
                    });
                    org.$save().then(function() {
                        self.alerts.addAlert({
                            message: 'Successfully added organization.',
                            type: 'success'
                        });
                        self.loadOrgs();
                        self.selectedOrgs = [];
                        self.gridApi.selection.clearSelectedRows();
                    }, function() {
                        self.alerts.addAlert({
                            message: 'Failed to add organization.',
                            type: 'danger'
                        });
                    });
                });
            };

            self.editOrg = function(rowEntity) {
                rowEntity.needsApproval = false;
                var org = new Organizations({
                    id: rowEntity.id,
                    name: rowEntity.name,
                    needsApproval: rowEntity.needsApproval
                });
                self.gridApi.rowEdit.setSavePromise(rowEntity, org.$update());
            };

            self.updateOrg = function(row) {
                var org = new Organizations({
                    id: row.entity.id,
                    name: row.entity.name,
                    needsApproval: row.entity.needsApproval
                });
                org.$update();
            };

            self.mergeOrgs = function(orgs) {
                var modalInstance = $uibModal.open({
                    templateUrl: 'views/mergeorgsmodal.html',
                    controller: 'MergeOrgsModalCtrl as ctrl',
                    size: 'sm',
                    resolve: {
                        name: function() {
                            return orgs[0].name;
                        }
                    }
                });

                modalInstance.result.then(function(name) {
                    var merge = new Organizations({
                        organizations: orgs,
                        newName: name
                    });
                    merge.$merge().then(function() {
                        self.alerts.addAlert({
                            message: 'Successfully merged organizations.',
                            type: 'success'
                        });
                        self.loadOrgs();
                        self.selectedOrgs = [];
                        self.gridApi.selection.clearSelectedRows();
                    }, function() {
                        self.alerts.addAlert({
                            message: 'Failed to merge organizations.',
                            type: 'danger'
                        });
                    });
                });
            };

            self.deleteOrgs = function(orgs) {
                console.log(orgs);
                lodash.forEach(orgs, function(org) {
                    console.log(org);
                    var organization = new Organizations();
                    console.log(organization);
                    organization.$delete({
                        id: org.id
                    }).then(function() {
                        self.alerts.addAlert({
                            message: 'Successfully deleted ' + org.name,
                            type: 'success'
                        });
                        self.loadOrgs();
                        self.selectedOrgs = [];
                        self.gridApi.selection.clearSelectedRows();
                    }, function(errResponse) {
                        self.alerts.addAlert({
                            message: 'Failed to delete ' + org.name + ': ' + errResponse.data.error,
                            type: 'danger'
                        });
                    });
                });
            };
        }
    ]);
