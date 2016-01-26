'use strict';

/**
 * @ngdoc service
 * @name nhcWebApp.ParticipantService
 * @description
 * # ParticipantService
 * Factory in the nhcWebApp.
 */
angular.module('nhcWebApp')
    .factory('Participants', ['$resource', 'API', function($resource, API) {
        return $resource(API.baseUrl + '/api/participant', null, {
            get: {
                method: 'GET',
                url: API.baseUrl + '/api/participant',
                isArray: true,
                cache: false
            },
            getAdmin: {
                method:'GET',
                url: API.baseUrl + '/api/admin/participant',
                isArray: true,
                cache: false
            },
            updateScorecard: {
                method:'PUT',
                url: API.baseUrl + '/api/participant/scorecard'
            }
        });
    }]);
