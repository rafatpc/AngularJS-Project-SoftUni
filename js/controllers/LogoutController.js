'use strict';

app.controller('LogoutController', [
    '$location', 'userService', '$scope',
    function($location, userService, $scope) {
        $scope.pageTitle = 'Logout';
        userService.logout();
        $location.path('/login');
    }
]);