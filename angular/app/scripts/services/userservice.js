'use strict';

/**
 * @ngdoc service
 * @name nhcWebApp.UserService
 * @description
 * # UserService
 * Factory in the nhcWebApp.
 */
angular.module('nhcWebApp')
    .factory('UserService', ['$auth', 'AuthService', function($auth, AuthService) {
        // Service logic
        // ...

        var currentUser = {
            status: 'unauthed'
        };

        var refreshUser = function() {
            console.log('Function called.');
            if (!$auth.isAuthenticated()) {
                currentUser = {
                    status: 'unauthed'
                };
            } else {
                AuthService.get(function(user) {
                    currentUser = user;
                }, function() {
                    $auth.logout();
                    currentUser.status = 'unauthed';
                });
            }
        };

        var isAuthenticated = function() {
            if (currentUser.status === 'unauthed' || currentUser.status === 'undefined') {
                return false;
            } else {
                return true;
            }
        };

        refreshUser();

        // Public API here
        return {
            currentUser: function() {
                return currentUser;
            },
            refreshUser: refreshUser,
            isAuthenticated: isAuthenticated
        };
    }]);
