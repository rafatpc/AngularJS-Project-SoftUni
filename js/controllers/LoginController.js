'use strict';

app.controller('LoginController', ['$scope', 'userService', '$location', function($scope, userService, $location) {
        $scope.login = function(user) {
            userService.login(user);
            $location.path('/home');
        };
    }
]);