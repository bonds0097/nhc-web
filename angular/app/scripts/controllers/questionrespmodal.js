'use strict';

/**
 * @ngdoc function
 * @name nhcWebApp.controller:QuestionrespmodalCtrl
 * @description
 * # QuestionrespmodalCtrl
 * Controller of the nhcWebApp
 */
angular.module('nhcWebApp')
  .controller('QuestionRespModalCtrl', ['respondents', function (respondents) {
    var self = this;

    self.gridOptions = {
            enableRowSelection: true,
            multiSelect: true,
            enableRowHeaderSelection: true,
            enableSelectAll: true,
            showGridFooter: true,
            enableFiltering: true,
            enableGridMenu: true,
            exporterCsvFilename: 'nhc_question_respondents.csv',
            exporterMenuPdf: false
        };

    self.gridOptions.data = respondents;

  }]);
