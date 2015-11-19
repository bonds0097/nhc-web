'use strict';

/**
 * @ngdoc service
 * @name nhcWebApp.Commitments
 * @description
 * # Commitments
 * Factory in the nhcWebApp.
 */
angular.module('nhcWebApp')
  .factory('Commitments', ['$resource', 'API', function ($resource, API) {
    return $resource(API.baseUrl + '/api/commitments', null, {
            get: {
                method: 'GET',
                url: API.baseUrl + '/api/commitments',
                isArray: true,
                cache: true
            }
        });
  }]);
