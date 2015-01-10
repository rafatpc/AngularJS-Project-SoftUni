app.directive('rightSidebar', function() {
    return {
        restrict: 'E',
        controller: 'SidebarController',
        templateUrl: 'templates/main/right-sidebar.html',
        replace: true
    };
});