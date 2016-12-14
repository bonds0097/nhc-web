'use strict';

/**
 * @ngdoc service
 * @name nhcWebApp.API
 * @description
 * # API
 * Factory in the nhcWebApp.
 */
angular.module('nhcWebApp')
  .factory('API', [function () {
    var baseUrl = '//api.nutritionhabitchallenge.com';

    // Public API here
    return {
      baseUrl: baseUrl
    };
  }]);
