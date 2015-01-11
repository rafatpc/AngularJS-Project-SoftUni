'use strict';

app.controller('CategoryControler', [
    '$scope', '$rootScope', 'categoriesService',
    function($scope, $rootScope, categoriesService) {
        categoriesService.getAll().$promise.then(function(data) {
            $scope.categories = data;
        }, function(error) {
            console.log(error);
        });
    }
]);