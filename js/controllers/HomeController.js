'use strict';

app.controller('HomeController', function($scope, $http, adsService, authenticationService, $rootScope) {
    $http.defaults.headers.common['Authorization'] = authenticationService.authToken();
    
    $rootScope.pageTitle = 'Home';
    
    adsService.getAds().$promise.then(function(data) {
        $scope.ads = data;
    }, function(error) {
        console.log(error);
    });
});