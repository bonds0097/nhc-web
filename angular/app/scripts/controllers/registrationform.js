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
        'Organizations', 'lodash', '$window',
        function(UserService, AlertService, Commitments, Registration, Organizations, lodash, $window) {
            var self = this;

            self.false = false;
            self.true = true;

            self.user = UserService;
            self.Alerts = AlertService;
            self.commCategories = Commitments.get();
            self.organizations = Organizations.get();

            self.css = {
                labelWidth: '2',
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

            function Participant() {
                this.firstName = null;
                this.lastName = null;
                this.ageRange = null;
                this.category = null;
                this.commitment = null;
            }

            self.addParticipant = function() {
                self.newRegistration.participants.push(new Participant());
            };

            self.deleteParticipant = function(index) {
                self.newRegistration.participants.splice(index, 1);
            };

            self.trimParticipants = function(bool) {
                if (!bool) {
                    self.newRegistration.participants
                        .splice(1, self.newRegistration.participants.length - 1);
                }
            };

            self.clearOrganization = function(bool) {
                if (!bool) {
                    self.newRegistration.organization = null;
                }
            };

            self.setCategory = function(index, category) {
                console.log(index, category);
                self.newRegistration.participants[index].category = category.name;
            };

            self.sendRegistration = function(newRegistration) {
                // Figure out custom commitments.
                lodash.forEach(self.newRegistration.participants, function(participant, index) {
                    if (participant.category === 'Other' || participant.commitment === 'Other') {
                        self.newRegistration.customCommitment = true;
                        self.newRegistration.participants[index].commitment = self.customCommitment;
                     }
                });

                var registration = new Registration(newRegistration);

                UserService.currentUser().status = "undefined";
                registration.$save().then(function() {
                        UserService.refreshUser();
                        if (self.newRegistration.donation === 'ysb') {
                            $window.open('http://ccysb.com/?page_id=1197 ', '_blank');
                        } else if(self.newRegistration.donation === 'cvim') {
                            $window.open('https://cvim.ejoinme.org/MyPages/CVIMNHC/tabid/524126/Default.aspx', '_blank');
                        }
                    },
                    function(errResponse) {
                        if (errResponse.status === 500) {
                            self.Alerts.addAlert({
                                message: "Something went wrong with registration. Please try again later.",
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

                self.isUserOrg = true;

                self.newRegistration = {
                    organization: null,
                    comment: null,
                    donation: null,
                    sharing: null,
                    participants: [new Participant()],
                    family: false,
                    familyCode: null,
                    customCommitment: false
                };

                self.newRegistration.participants[0].firstName = self.user.currentUser().firstName;
                self.newRegistration.participants[0].lastName = self.user.currentUser().lastName;

                self.numParticipants = 1;
            };

            self.reset();
        }
    ]);
