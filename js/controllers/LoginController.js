app.controller('LoginController', ['$scope', 'userService', 'authenticationService',
    function($scope, userService, authenticationService) {
        $scope.login = function(user) {
            userService.login(user);
        };
    }
]);