'use strict';

app.controller('HomeController', function($scope, $http, $rootScope, adsService, authenticationService, pageSize) {
    $http.defaults.headers.common['Authorization'] = authenticationService.getHeaders();
    
    adsService.getAds().$promise.then(function(data) {
        $scope.ads = data;
    }, function(error) {
        console.log(error);
    });
});