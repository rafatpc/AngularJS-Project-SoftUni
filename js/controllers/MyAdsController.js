'use strict';

app.controller('MyAdsController', function($scope, $http, userAdsService, authenticationService, $location) {
    $http.defaults.headers.common['Authorization'] = authenticationService.authToken();

    $scope.publishAgain = function(id) {
        userAdsService.republish(id);
    };

    $scope.deactivate = function(id) {
        userAdsService.deactivate(id);
    };

    $scope.deleteAd = function(id) {
        $location.path('/user/ads/delete/' + id);
    };

    $scope.edit = function(id) {
        $location.path('/user/ads/edit/' + id);
    };

    userAdsService.getUserAds().$promise.then(function(data) {
        $scope.ads = data;
    }, function(error) {
        console.log(error);
    });
});