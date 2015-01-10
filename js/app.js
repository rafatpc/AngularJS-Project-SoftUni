'use strict';

var app = angular.module('app', ['ngRoute', 'ngResource']);

app.constant('baseServiceUrl', 'http://softuni-ads.azurewebsites.net/api/');
app.constant('pageSize', 2);

app.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: '/templates/home.html',
            controller: 'HomeController'
        });

        $routeProvider.when('/user/ads', {
            templateUrl: '/templates/home.html',
            controller: 'MyAdsController'
        });

        $routeProvider.when('/login', {
            templateUrl: '/templates/login.html',
            controller: 'LoginController'
        });

        $routeProvider.when('/register', {
            templateUrl: '/templates/register.html',
            controller: 'RegisterController'
        });

        $routeProvider.when('/user/ads/publish', {
            templateUrl: '/templates/user/newad.html',
            controller: 'BlankController'
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