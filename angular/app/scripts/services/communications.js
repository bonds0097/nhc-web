'use strict';

/**
 * @ngdoc service
 * @name nhcWebApp.Communications
 * @description
 * # Communications
 * Factory in the nhcWebApp.
 */
angular.module('nhcWebApp')
  .factory('Communications', ['$resource', 'API', function ($resource, API) {
    return $resource(API.baseUrl + '/api/communication', null, {
            sendMessage: {
                method: 'POST',
                url: API.baseUrl + '/api/admin/message'
            },
            createUpdate: {
              method: 'POST',
              url: API.baseUrl + '/api/admin/update'
            }
        });
  }]);
