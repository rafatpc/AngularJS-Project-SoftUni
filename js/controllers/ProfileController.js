'use strict';

app.controller('ProfileController', function($scope, $http, adsService, authenticationService, $rootScope) {
    $http.defaults.headers.common['Authorization'] = authenticationService.authToken();
    
    $rootScope.pageTitle = 'Edit User Profile';
    
    adsService.getAds().$promise.then(function(data) {
        $scope.ads = data;
    }, function(error) {
        console.log(error);
    });
});