'use strict';

var app = angular.module('app', ['ngRoute', 'ngResource']);

app.constant('baseServiceUrl', 'http://softuni-ads.azurewebsites.net/api/');
app.constant('pageSize', 2);

app.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: '/templates/home.html',
            controller: 'HomeController'
        });

        $routeProvider.when('/register', {
            templateUrl: '/templates/register.html',
            controller: 'RegisterController'
        });

        $routeProvider.when('/login', {
            templateUrl: '/templates/login.html',
            controller: 'LoginController'
        });

        $routeProvider.when('/user/ads', {
            templateUrl: '/templates/user/myads.html',
            controller: 'MyAdsController'
        });

        $routeProvider.when('/user/ads/publish', {
            templateUrl: '/templates/user/newad.html',
            controller: 'PublishAdController'
        });

        $routeProvider.when('/user/ads/delete/:id', {
            templateUrl: '/templates/user/deletead.html',
            controller: 'DeleteAdController'
        });

        $routeProvider.when('/user/profile', {
            templateUrl: '/templates/user/profile.html',
            controller: 'ProfileController'
        });

        $routeProvider.when('/logout', {
            templateUrl: '/templates/home.html',
            controller: 'LogoutController'
        });

        $routeProvider.otherwise({
            redirectTo: '/'
        });
    }
]);