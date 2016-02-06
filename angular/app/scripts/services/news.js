'use strict';

/**
 * @ngdoc service
 * @name nhcWebApp.News
 * @description
 * # News
 * Factory in the nhcWebApp.
 */
angular.module('nhcWebApp')
    .factory('News', ['$resource', 'API', function($resource, API) {
        return $resource(API.baseUrl + '/api/news', null, {
            get: {
                isArray: true,
                cache: true
            },
            save: {
              method: 'POST',
              url: API.baseUrl + '/api/admin/news'
            },
            list: {
                method: 'GET',
                url: API.baseUrl + '/api/admin/news',
                isArray: true,
                cache: false
            },
            publish: {
                method: 'PUT',
                url: API.baseUrl + '/api/admin/news/:id/publish'
            },
            unpublish: {
                method: 'PUT',
                url: API.baseUrl + '/api/admin/news/:id/unpublish'
            },
            delete: {
                method: 'DELETE',
                url: API.baseUrl + '/api/admin/news/:id'
            },
        });
    }]);
