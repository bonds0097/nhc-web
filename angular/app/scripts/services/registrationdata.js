'use strict';

/**
 * @ngdoc service
 * @name nhcWebApp.RegistrationData
 * @description
 * # RegistrationData
 * Factory in the nhcWebApp.
 */
angular.module('nhcWebApp')
    .factory('RegistrationData', ['UserService', function(UserService) {
        var registration = {};

        var reset = function() {
            registration.organization = null;
            registration.comment = null;
            registration.donation = null;
            registration.sharing = null;
            registration.participants = [new Participant()];
            registration.family = false;
            registration.familyCode = null;
            registration.isUserOrg = true;

            registration.participants[0].firstName = UserService.currentUser().firstName;
            registration.participants[0].lastName = UserService.currentUser().lastName;
        };

        function Participant() {
            this.firstName = null;
            this.lastName = null;
            this.ageRange = null;
            this.category = null;
            this.commitment = null;
            this.custom = null;
            this.customCommitment = false;
        }

        var addParticipant = function() {
            registration.participants.push(new Participant());
        };

        var deleteParticipant = function(index) {
            registration.participants.splice(index, 1);
        };

        var trimParticipants = function(bool) {
            if (!bool) {
                registration.participants
                    .splice(1, registration.participants.length - 1);
            }
        };

        var errors = {
            organization: null,
            comment: null,
            donation: null,
            sharing: null,
            participants: [],
            familyCode: null
        };

        reset();


        // Public API here
        return {
            errors: function() {
                return errors;
            },
            reset: reset,
            get: function() {
                return registration;
            },
            addParticipant: addParticipant,
            deleteParticipant: deleteParticipant,
            trimParticipants: trimParticipants
        };
    }]);
