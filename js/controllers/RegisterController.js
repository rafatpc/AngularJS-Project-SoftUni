app.controller('RegisterController', ['$scope', 'userService', function($scope, userService) {
        $scope.login = function(user) {
            userService.login(user);
        };
    }
]);