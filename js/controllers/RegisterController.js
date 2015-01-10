app.controller('RegisterController', ['$scope', 'userService', 'townsService', function($scope, userService, townsService) {
        townsService.getTowns().$promise.then(function(data) {
            $scope.towns = data;
        });

        $scope.register = function(userData) {
            userService.register(userData);
        };
    }
]);