'use strict';

app.factory('userService', ['$resource', 'baseServiceUrl', 'authenticationService',
    function($resource, baseServiceUrl, authenticationService) {
        function registerUser(user) {
            return $resource(baseServiceUrl + 'user/register').save(user).$promise.then(function(data) {
                authenticationService.saveUser(data);
            }, function(error) {
                console.log(error.data.modelState);
            });
        }

        function loginUser(user) {
            return $resource(baseServiceUrl + 'user/login').save(user).$promise.then(function(data) {
                authenticationService.saveUser(data);
                window.location = '/';
            });
        }

        function logoutUser() {
            return $resource(baseServiceUrl + 'user/logout').save().$promise.then(function(data) {
                authenticationService.removeUser();
                window.location = '/';
            });
        }

        return {
            register: registerUser,
            login: loginUser,
            logout: logoutUser
        };
    }
]);