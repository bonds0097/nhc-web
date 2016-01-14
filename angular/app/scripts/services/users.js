'use strict';

/**
 * @ngdoc service
 * @name nhcWebApp.Users
 * @description
 * # Users
 * Factory in the nhcWebApp.
 */
angular.module('nhcWebApp')
    .factory('Users', ['$resource', 'API', function($resource, API) {
        return $resource(API.baseUrl + '/api/admin/user', null, {
            get: {
                method: 'GET',
                isArray: true,
                cache: false
            },
            update: {
                method: 'PUT'
            }
        });
    }]);
