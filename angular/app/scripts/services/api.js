'use strict';

/**
 * @ngdoc service
 * @name nhcWebApp.API
 * @description
 * # API
 * Factory in the nhcWebApp.
 */
angular.module('nhcWebApp')
  .factory('API', ['$location', function ($location) {
    var baseUrl = '//' + $location.host() + ':4433';

    // Public API here
    return {
      baseUrl: baseUrl
    };
  }]);
