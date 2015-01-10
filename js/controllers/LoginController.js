'use strict';

app.controller('LoginController', ['$scope', 'userService', '$location', function($scope, userService, $location) {
        $scope.pageTitle = 'Login';
        $scope.login = function(user) {
            userService.login(user);
            $location.path('/home');
        };
    }
]);