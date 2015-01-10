'use strict';

app.controller('LogoutController', [
    '$location', 'userService', '$scope',
    function($rootScope, userService, $scope) {
        $rootScope.pageTitle = 'Logout';
        userService.logout().$promise.then(function() {
            window.location = '#/home';
        });
    }
]);