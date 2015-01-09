app.factory('userService', ['$resource', 'baseServiceUrl', 'authenticationService',
    function($resource, baseServiceUrl, authenticationService) {
        function loginUser(user) {
            return $resource(baseServiceUrl + 'user/login').save(user).
                    $promise.then(function(data) {
                        authenticationService.saveUser(data);
                    });
        }

        return {
            login: loginUser
        };
    }
]);