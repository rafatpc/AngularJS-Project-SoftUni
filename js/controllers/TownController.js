'use strict';

app.controller('TownControler', [
    '$scope', '$rootScope', 'townsService',
    function($scope, $rootScope, townsService) {
        townsService.getAll().$promise.then(function(data) {
            $scope.towns = data;
        });
    }
]);