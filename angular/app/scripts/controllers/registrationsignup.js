'use strict';

/**
 * @ngdoc function
 * @name nhcWebApp.controller:RegistrationsignupctrlCtrl
 * @description
 * # RegistrationsignupctrlCtrl
 * Controller of the nhcWebApp
 */
angular.module('nhcWebApp')
    .controller('RegistrationSignupCtrl', ['$auth', '$uibModal', 'AlertService', function($auth, $uibModal, AlertService) {
        var self = this;

        self.Alerts = AlertService;

        // Signup User in a Modal Window
        self.signupEmailModal = function() {

            var modalInstance = $uibModal.open({
                templateUrl: '/views/registrationsignupemailmodal.html',
                controller: 'RegistrationsignupemailmodalCtrl as ctrl',
                size: 'sm'
            });

             modalInstance.result.then(function(user) {
              $auth.signup(user).then(function(response) {
                self.Alerts.addAlert({message:'Your account has been created but your e-mail address still needs to be verified. Check you inbox!', type:'success'});
              }, function(error) {
                if (error.status === 400) {
                  self.Alerts.addAlert({message:error.data.error, type:"danger"});
                } else {
                  self.Alerts.addAlert({message:error.data.error, type:"warning"});
                }
              });
             });
        };

        self.authenticate = function(provider) {
            $auth.authenticate(provider);
        };
    }]);
