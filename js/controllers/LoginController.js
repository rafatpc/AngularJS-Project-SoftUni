'use strict';

app.controller('LoginController', ['$scope', 'userService', '$location', function($scope, userService, $rootScope) {
        $rootScope.pageTitle = 'Login';
        $scope.login = function(user) {
            userService.login(user);
        };
    }
]);