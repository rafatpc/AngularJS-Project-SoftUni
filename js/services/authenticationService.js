'use strict';

app.factory('authenticationService', function() {
    function saveUserData(data) {
        localStorage.setItem('user', angular.toJson(data));
    }

    function getUserData() {
        var userData = localStorage.getItem('user');

        if (userData) {
            return angular.fromJson(userData);
        }

        return null;
    }

    function getHeaders() {
        var headers = {};
        var userData = getUserData();

        if (userData) {
            headers.Authorization = 'Bearer ' + userData.access_token;
        }

        return headers;
    }

    function getAuthToken() {
        var userData = getUserData();

        if (userData) {
            return 'Bearer ' + userData.access_token;
        }

        return null;
    }

    function removeUser() {
        return localStorage.removeItem('user');
    }

    return {
        saveUser: saveUserData,
        getUser: getUserData,
        getHeaders: getHeaders,
        removeUser: removeUser,
        authToken: getAuthToken
    };
});