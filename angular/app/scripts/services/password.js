'use strict';

/**
 * @ngdoc service
 * @name nhcWebApp.Password
 * @description
 * # Password
 * Factory in the nhcWebApp.
 */
angular.module('nhcWebApp')
  .factory('Password', ['API', '$resource', function (API, $resource) {
    return $resource(API.baseUrl + '/auth/password', null, {
      reset: {
        method: 'POST',
        url: API.baseUrl + '/auth/password/reset'
      },
      forgot: {
        method:'POST',
        url: API.baseUrl + '/auth/password/forgot'
      }
    });
  }]);
