'use strict';

app.controller('LogoutController', ['$location', 'userService', function($location, userService) {
        userService.logout();
        $location.path('/login');
    }
]);