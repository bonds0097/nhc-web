'use strict';

/**
 * @ngdoc service
 * @name nhcWebApp.Globals
 * @description
 * # Globals
 * Factory in the nhcWebApp.
 */
angular.module('nhcWebApp')
  .factory('Globals', ['$resource', 'API', function ($resource, API) {
    return $resource(API.baseUrl + '/api/globals', null);
  }]);
