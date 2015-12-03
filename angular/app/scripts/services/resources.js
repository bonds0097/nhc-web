'use strict';

/**
 * @ngdoc service
 * @name nhcWebApp.Resources
 * @description
 * # Resources
 * Factory in the nhcWebApp.
 */
angular.module('nhcWebApp')
    .factory('Resources', function() {
        var resources = [{
            title: 'A Message to Families',
            url: 'http://www.statecollegefitnessconsultantsinc.com/articles/a_message_to_families',
            description: 'We believe the Challenge is an excellent family activity, but more importantly, an excellent parenting opportunity....',
            img: 'img/carousel/res_001.jpg'
        }];

        // Public API here
        return {
            get: function() {
                return resources;
            }
        };
    });
