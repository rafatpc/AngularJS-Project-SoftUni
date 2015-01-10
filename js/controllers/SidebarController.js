'use strict';

app.controller('SidebarController', function($scope, categoriesService, townsService) {
    categoriesService.getAll().$promise.then(function(data) {
        $scope.categories = data;
        console.log(data);
    }, function(error) {
        console.log(error);
    });

    townsService.getAll().$promise.then(function(data) {
        $scope.towns = data;
        console.log(data);
    }, function(error) {
        console.log(error);
    });
});