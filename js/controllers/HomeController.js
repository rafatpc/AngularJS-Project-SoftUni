'use strict';

app.controller('HomeController', function($scope, $http, adsService, authenticationService) {
    $http.defaults.headers.common['Authorization'] = authenticationService.authToken();
    
    $scope.pageTitle = 'Home';
    
    adsService.getAds().$promise.then(function(data) {
        $scope.ads = data;
    }, function(error) {
        console.log(error);
    });
});