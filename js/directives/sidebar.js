app.directive('sidebar', ['authenticationService', function(authenticationService) {
        var sidebar = 'guest-sidebar';

        if (authenticationService.getUser() !== null) {
            sidebar = 'left-sidebar';
        }

        return {
            restrict: 'E',
            controller: null,
            templateUrl: 'templates/main/' + sidebar + '.html',
            replace: true
        };
    }
]);