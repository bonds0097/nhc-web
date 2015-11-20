'use strict';

/**
 * @ngdoc service
 * @name nhcWebApp.Registration
 * @description
 * # Registration
 * Factory in the nhcWebApp.
 */
angular.module('nhcWebApp')
  .factory('Registration', ['$resource', 'API', function ($resource, API) {
    return $resource(API.baseUrl + '/api/registration', null);
  }]);
