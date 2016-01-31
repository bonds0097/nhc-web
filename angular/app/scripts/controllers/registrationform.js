'use strict';

/**
 * @ngdoc function
 * @name nhcWebApp.controller:RegistrationformctrlCtrl
 * @description
 * # RegistrationformctrlCtrl
 * Controller of the nhcWebApp
 */
angular.module('nhcWebApp')
    .controller('RegistrationFormCtrl', ['UserService', 'AlertService', 'Commitments', 'Registration',
        'Organizations', 'lodash', '$window', '$uibModal', 'RegistrationData', '$location',
        '$anchorScroll',
        function(UserService, AlertService, Commitments, Registration, Organizations, lodash,
            $window, $uibModal, RegistrationData, $location, $anchorScroll) {
            var self = this;

            self.false = false;
            self.true = true;

            self.user = UserService;
            self.Alerts = AlertService;
            self.commCategories = Commitments.get();
            self.organizations = Organizations.get();

            self.submitted = false;

            self.newRegistration = RegistrationData.get();
            self.serverErrors = RegistrationData.errors();

            self.css = {
                labelWidth: '3',
                inputWidth: '6',
                addonWidth: '1'
            };

            self.ageRanges = {
                '12 and under': [0, 12],
                '13-18': [13, 18],
                '19-24': [19, 24],
                '25-34': [25, 34],
                '35-59': [35, 59],
                '60+': [60, 99],
            };


            self.addParticipant = function() {
                return RegistrationData.addParticipant();
            };

            self.deleteParticipant = function(index) {
                return RegistrationData.deleteParticipant(index);
            };

            self.trimParticipants = function(bool) {
                return RegistrationData.trimParticipants(bool);
            };

            self.categoryResources = function(links) {
                $uibModal.open({
                    controller: 'UrlsmodalCtrl as ctrl',
                    resolve: {
                        links: function() {
                            return links;
                        }
                    },
                    templateUrl: 'views/urlsmodal.html'
                });
            };

            self.clearOrganization = function(bool) {
                if (!bool) {
                    self.newRegistration.organization = null;
                }
            };

            self.setCategory = function(index, category) {
                self.newRegistration.participants[index].category = category.name;
            };

            self.sendRegistration = function(newRegistration, form) {
                if (form) {
                    if (form.$invalid) {
                        self.Alerts.addAlert({type:"danger", message:"Your submission is invalid. Please make sure all fields are properly filled out. All fields are required except for Age Range and Comment."});
                        self.submitted = true;
                        $location.hash('top');
                        $anchorScroll();
                        return;
                    }
                }

                // Figure out custom commitments.
                lodash.forEach(self.newRegistration.participants, function(participant, index) {
                    if (participant.category === 'Other' || participant.commitment === 'Other') {
                        self.newRegistration.participants[index].customCommitment = true;
                        self.newRegistration.participants[index].commitment = participant.custom;
                    }
                });

                var registration = new Registration(newRegistration);

                UserService.currentUser().status = "undefined";
                registration.$save().then(function() {
                        UserService.refreshUser();
                        if (self.newRegistration.donation === 'ysb') {
                            $window.open('http://ccysb.com/?page_id=1197 ', '_blank');
                        } else if (self.newRegistration.donation === 'cvim') {
                            $window.open('https://cvim.ejoinme.org/MyPages/CVIMNHC/tabid/524126/Default.aspx', '_blank');
                        }
                    },
                    function(errResponse) {
                        UserService.currentUser().status = "unregistered";
                        if (errResponse.status === 400) {
                            self.Alerts.addAlert({
                                message: "There were errors with your registration submission. Please review and re-submit.",
                                type: "danger"
                            });
                            // Map errors.
                            if (errResponse.data.organization) {
                                self.serverErrors.organization = errResponse.data.organization;
                            }

                            // Restore selected category
                        } else if (errResponse.status === 500) {
                            self.Alerts.addAlert({
                                message: "Uh oh. Something went wrong on our end. Please try again.",
                                type: "danger"
                            });
                        } else {
                            self.Alerts.addAlert({
                                message: errResponse.data.error,
                                type: "danger"
                            });
                        }
                    });
            };

            self.reset = function(form) {
                if (form) {
                    form.$setPristine();
                    form.$setUntouched();
                }

                RegistrationData.reset();
            };
        }
    ]);
