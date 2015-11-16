'use strict';

/**
 * @ngdoc service
 * @name nhcWebApp.AuthService
 * @description
 * # AuthService
 * Factory in the nhcWebApp.
 */
angular.module('nhcWebApp')
    .factory('AuthService', ['$resource', function($resource) {
        return $resource('http://localhost:4433/auth/', null);
    }]);
