'use strict';

app.controller('DeleteAdController', function($scope, $http, userAdsService, authenticationService, $routeParams) {
    $http.defaults.headers.common['Authorization'] = authenticationService.authToken();
    var adInfo = userAdsService.getById($routeParams.id);
    $scope.ad = adInfo;

    console.log(adInfo);

    $scope.deleteAd = function(id) {
        userAdsService.delete(id);
    };

    userAdsService.getUserAds().$promise.then(function(data) {
        $scope.ads = data;
    }, function(error) {
        console.log(error);
    });
});