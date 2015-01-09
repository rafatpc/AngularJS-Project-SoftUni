app.factory('userService', ['$resource', 'baseServiceUrl', 'authenticationService',
    function($resource, baseServiceUrl, authenticationService) {
        function registerUser(user) {
            return $resource(baseServiceUrl + 'user/register').save(user).
                    $promise.then(function(data) {
                        authenticationService.saveUser(data);
                    });
        }

        function loginUser(user) {
            return $resource(baseServiceUrl + 'user/login').save(user).
                    $promise.then(function(data) {
                        authenticationService.saveUser(data);
                    });
        }

        return {
            register: registerUser,
            login: loginUser
        };
    }
]);