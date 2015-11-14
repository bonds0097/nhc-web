'use strict';

/**
 * @ngdoc service
 * @name nhcWebApp.UserService
 * @description
 * # UserService
 * Factory in the nhcWebApp.
 */
angular.module('nhcWebApp')
    .factory('UserService', ['$auth', function($auth) {
        // Service logic
        // ...

        var isAuthenticated = function() {
            return $auth.isAuthenticated();
        };

        // Public API here
        return {
            isAuthenticated: isAuthenticated
        };
    }]);
