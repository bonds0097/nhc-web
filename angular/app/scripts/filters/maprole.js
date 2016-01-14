'use strict';

/**
 * @ngdoc filter
 * @name nhcWebApp.filter:mapRole
 * @function
 * @description
 * # mapRole
 * Filter in the nhcWebApp.
 */
angular.module('nhcWebApp')
    .filter('mapRole', function() {
        var roleHash = {
            'user': 'User',
            'org_admin': 'Organization Administrator',
            'global_admin': 'Global Administrator',
            'super_global_admin': 'Super Global Administrator'
        };

        return function(input) {
            if (!input) {
                return '';
            } else {
                return roleHash[input];
            }
        };
    });
