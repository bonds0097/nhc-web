'use strict';

/**
 * @ngdoc service
 * @name nhcWebApp.Questions
 * @description
 * # Questions
 * Factory in the nhcWebApp.
 */
angular.module('nhcWebApp')
   .factory('Questions', ['$resource', 'API', function($resource, API) {
        return $resource(API.baseUrl + '/api/bonus-question', null, {
            get: {
                url: API.baseUrl + '/api/admin/bonus-question',
                isArray: true,
                cache: false
            },
            answer: {
              method: 'POST',
              url: API.baseUrl + '/api/bonus-question'
            },
            save: {
              method: 'POST',
              url: API.baseUrl + '/api/admin/bonus-question'
            },
            fetch: {
                method: 'GET',
                url: API.baseUrl + '/api/bonus-question',
                cache: true
            },
            enable: {
                method: 'PUT',
                url: API.baseUrl + '/api/admin/bonus-question/:id/enable'
            },
            disable: {
                method: 'PUT',
                url: API.baseUrl + '/api/admin/bonus-question/disable'
            },
            delete: {
                method: 'DELETE',
                url: API.baseUrl + '/api/admin/bonus-question/:id'
            },
        });
    }]);
