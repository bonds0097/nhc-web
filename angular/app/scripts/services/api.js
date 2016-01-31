'use strict';

/**
 * @ngdoc service
 * @name nhcWebApp.API
 * @description
 * # API
 * Factory in the nhcWebApp.
 */
angular.module('nhcWebApp')
  .factory('API', ['$location', 'envService', function ($location, envService) {
    var baseUrl = envService.read('apiUrl');

    // Public API here
    return {
      baseUrl: baseUrl
    };
  }]);
