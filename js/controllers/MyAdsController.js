'use strict';

app.controller('MyAdsController', function($scope, $http, userAdsService, authenticationService) {
    $http.defaults.headers.common['Authorization'] = authenticationService.authToken();

    userAdsService.getUserAds().$promise.then(function(data) {
        $scope.ads = data;
    }, function(error) {
        console.log(error);
    });
});