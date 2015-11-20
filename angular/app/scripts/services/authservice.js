'use strict';

/**
 * @ngdoc service
 * @name nhcWebApp.AuthService
 * @description
 * # AuthService
 * Factory in the nhcWebApp.
 */
angular.module('nhcWebApp')
    .factory('AuthService', ['$resource', 'API', function($resource, API) {
        return $resource(API.baseUrl + '/auth/', null, {
          verify: {
            method: 'POST',
            url: API.baseUrl + '/auth/verify'
          }
        });
    }]);
