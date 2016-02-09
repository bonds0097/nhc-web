'use strict';

/**
 * @ngdoc function
 * @name nhcWebApp.controller:AdminusersCtrl
 * @description
 * # AdminusersCtrl
 * Controller of the nhcWebApp
 */
angular.module('nhcWebApp')
    .controller('AdminUsersCtrl', ['UserService', 'Users', 'lodash', 'uiGridConstants', function(UserService, Users, lodash, uiGridConstants) {
        var self = this;

        self.user = UserService;
        self.enableAdvanced = self.user.isGlobalAdmin();

        self.selectedUsers = [];

        self.gridOptions = {
            enableRowSelection: self.enableAdvanced,
            multiSelect: self.enableAdvanced,
            enableRowHeaderSelection: self.enableAdvanced,
            enableSelectAll: self.enableAdvanced,
            showGridFooter: true,
            enableFiltering: true,
            enableGridMenu: true,
            exporterCsvFilename: 'nhc_users.csv',
            exporterMenuPdf: false
        };

        self.loadUsers = function() {
            Users.get().$promise.then(
                function(data) {
                    self.gridOptions.data = lodash.sortBy(data, 'lastName');
                }
            );
        };

        self.gridOptions.columnDefs = [{
            name: 'firstName',
            width: '8%'
        }, {
            name: 'lastName',
            width: '8%',
        }, {
            name: 'email',
            displayName: 'E-Mail',
            enableCellEdit: false,
            visible: self.enableAdvanced,
            width: '15%'
        }, {
            name: 'role',
            cellEditableCondition: self.enableAdvanced,
            editableCellTemplate: 'ui-grid/dropdownEditor',
            width: '10%',
            editDropdownValueLabel: 'role',
            cellFilter: 'mapRole',
            editDropdownOptionsArray: [{
                id: 'user',
                role: 'User'
            }, {
                id: 'org_admin',
                role: 'Organization Administrator'
            }, {
                id: 'global_admin',
                role: 'Global Administrator'
            }],
            filter: {
                condition: uiGridConstants.filter.CONTAINS,
                type: uiGridConstants.filter.SELECT,
                selectOptions: [{
                    value: 'user',
                    label: 'User'
                }, {
                    value: 'org_admin',
                    label: 'Organization Administrator'
                }, {
                    value: 'global_admin',
                    label: 'Global Administrator'
                }]
            }
        }, {
            name: 'status',
            cellEditableCondition: self.enableAdvanced,
            width: '8%',
            editableCellTemplate: 'ui-grid/dropdownEditor',
            editDropdownOptionsArray: [{
                id: 'unconfirmed',
                value: 'unconfirmed'
            }, {
                id: 'unregistered',
                value: 'unregistered'
            }, {
                id: 'registered',
                value: 'registered'
            }],
            filter: {
                condition: uiGridConstants.filter.EXACT,
                type: uiGridConstants.filter.SELECT,
                selectOptions: [{
                    value: 'unconfirmed',
                    label: 'unconfirmed'
                }, {
                    value: 'unregistered',
                    label: 'unregistered'
                }, {
                    value: 'registered',
                    label: 'registered'
                }]
            }
        }, {
            name: 'organization',
            cellEditableCondition: self.enableAdvanced,
            width: '20%'
        }, {
            name: 'family',
            cellEditableCondition: self.enableAdvanced,
            width: '8%'
        }, {
            name: 'lastLogin',
            type: 'date',
            cellFilter: 'date:\'medium\'',
            enableFiltering: false,
            enableCellEdit: false
        }];

        self.loadUsers();

        self.gridOptions.onRegisterApi = function(gridApi) {
            self.gridApi = gridApi;

            gridApi.selection.on.rowSelectionChanged(null, function(row) {
                if (row.isSelected) {
                    self.selectedUsers.push(row.entity);
                } else {
                    self.selectedUsers.splice(self.selectedUsers.indexOf(row.entity), 1);
                }
            });

            gridApi.rowEdit.on.saveRow(null, self.editUser);

        };

        self.editUser = function(rowEntity) {
            var user = new Users(rowEntity);
            self.gridApi.rowEdit.setSavePromise(rowEntity, user.$update());
        };
    }]);
