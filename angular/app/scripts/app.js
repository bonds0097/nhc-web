'use strict';

/**
 * @ngdoc overview
 * @name nhcWebApp
 * @description
 * # nhcWebApp
 *
 * Main module of the application.
 */
angular
    .module('nhcWebApp', [
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ui.bootstrap',
        'ngLodash',
        'satellizer'
    ])
    .config(['$routeProvider', '$locationProvider', '$resourceProvider', '$httpProvider',
        '$authProvider',
        function($routeProvider, $locationProvider, $resourceProvider, $httpProvider,
            $authProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'views/main.html',
                    controller: 'MainCtrl',
                    controllerAs: 'main'
                })
                .when('/about', {
                    templateUrl: 'views/about.html',
                    controller: 'AboutCtrl',
                    controllerAs: 'about'
                })
                .when('/how-it-works', {
                    templateUrl: 'views/how-it-works.html',
                    controller: 'HowItWorksCtrl',
                    controllerAs: 'howItWorks'
                })
                .when('/resources', {
                    templateUrl: 'views/resources.html',
                    controller: 'ResourcesCtrl',
                    controllerAs: 'resources'
                })
                .when('/registration', {
                    templateUrl: 'views/registration.html',
                    controller: 'RegistrationCtrl',
                    controllerAs: 'ctrl'
                })
                .when('/prizes-and-sponsors', {
                    templateUrl: 'views/prizes-and-sponsors.html',
                    controller: 'PrizesAndSponsorsCtrl',
                    controllerAs: 'prizesAndSponsors'
                })
                .when('/about-us', {
                    templateUrl: 'views/about-us.html',
                    controller: 'AboutUsCtrl',
                    controllerAs: 'aboutUs'
                })
                .otherwise({
                    redirectTo: '/'
                });

            // Don't strip trailing slashes from calculated URLs
            $resourceProvider.defaults.stripTrailingSlashes = false;

            // use the HTML5 History API
            $locationProvider.html5Mode(true);

            // General config for authProvider.
            $authProvider.loginUrl = 'http://localhost:4433/auth/login';
            $authProvider.signupUrl = 'http://localhost:4433/auth/signup';
            $authProvider.tokenPrefix = 'nhc';

            // Facebook Configuration
            $authProvider.facebook({
                clientId: '788304851292820'
            });
            $authProvider.facebook({
                name: 'facebook',
                url: 'http://localhost:4433/auth/facebook',
                authorizationEndpoint: 'https://www.facebook.com/v2.5/dialog/oauth',
                redirectUri: window.location.origin + '/',
                requiredUrlParams: ['display', 'scope'],
                scope: ['email'],
                scopeDelimiter: ',',
                display: 'page',
                type: '2.5',
                popupOptions: {
                    width: 580,
                    height: 400
                }
            });

            // Google Configuration
            $authProvider.google({
                clientId: '38895207898-c0ga0u10pfcqm9d6s9graslif2h6j9a5.apps.googleusercontent.com'
            });
            $authProvider.google({
                url: 'http://localhost:4433/auth/google',
                authorizationEndpoint: 'https://accounts.google.com/o/oauth2/auth',
                redirectUri: window.location.origin || window.location.protocol + '//' + window.location.host,
                requiredUrlParams: ['scope'],
                optionalUrlParams: ['display'],
                scope: ['profile', 'email'],
                scopePrefix: 'openid',
                scopeDelimiter: ' ',
                display: 'popup',
                type: '2.0',
                popupOptions: {
                    width: 452,
                    height: 633
                }
            });

            // Twitter Configuration
            $authProvider.twitter({
                url: 'http://localhost:4433/auth/twitter',
                authorizationEndpoint: 'https://api.twitter.com/oauth/authenticate',
                redirectUri: window.location.origin || window.location.protocol + '//' + window.location.host,
                type: '1.0',
                popupOptions: {
                    width: 495,
                    height: 645
                }
            });
        }
    ]);
