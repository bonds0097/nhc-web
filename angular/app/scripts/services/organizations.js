'use strict';

/**
 * @ngdoc service
 * @name nhcWebApp.organizations
 * @description
 * # organizations
 * Factory in the nhcWebApp.
 */
angular.module('nhcWebApp')
    .factory('Organizations', ['$resource', 'API', function($resource, API) {
        return $resource(API.baseUrl + '/api/organizations', null, {
            get: {
                method: 'GET',
                url: API.baseUrl + '/api/organizations',
                isArray: true,
                cache: true
            }
        });
    }]);
