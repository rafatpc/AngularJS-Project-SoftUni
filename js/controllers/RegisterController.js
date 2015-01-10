app.controller('RegisterController', ['$scope', 'userService', 'townsService', '$rootScope', function($scope, userService, townsService, $rootScope) {
        $rootScope.pageTitle = 'Registration';

        townsService.getAll().$promise.then(function(data) {
            $scope.towns = data;
        });

        $scope.register = function(userData) {
            userService.register(userData);
        };
    }
]);