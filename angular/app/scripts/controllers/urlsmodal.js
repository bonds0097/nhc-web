'use strict';

/**
 * @ngdoc function
 * @name nhcWebApp.controller:UrlsmodalCtrl
 * @description
 * # UrlsmodalCtrl
 * Controller of the nhcWebApp
 */
angular.module('nhcWebApp')
  .controller('UrlsmodalCtrl', ['urls', function (urls) {
    var self = this;
    self.urls = urls;
  }]);
