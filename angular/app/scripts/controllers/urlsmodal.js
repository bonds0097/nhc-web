'use strict';

/**
 * @ngdoc function
 * @name nhcWebApp.controller:UrlsmodalCtrl
 * @description
 * # UrlsmodalCtrl
 * Controller of the nhcWebApp
 */
angular.module('nhcWebApp')
  .controller('UrlsmodalCtrl', ['links', function (links) {
    var self = this;
    self.links = links;
  }]);
