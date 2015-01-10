app.directive('sidebar', ['authenticationService', function(authenticationService) {
        var sidebar = 'guest-sidebar';

        if (authenticationService.getUser()) {
            sidebar = 'left-sidebar';
        }

        return {
            restrict: 'E',
            controller: 'HomeController',
            templateUrl: 'templates/main/' + sidebar + '.html',
            replace: true
        };
    }
]);