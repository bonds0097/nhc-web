'use strict';

/**
 * @ngdoc service
 * @name nhcWebApp.organizations
 * @description
 * # organizations
 * Factory in the nhcWebApp.
 */
angular.module('nhcWebApp')
  .factory('Organizations', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
