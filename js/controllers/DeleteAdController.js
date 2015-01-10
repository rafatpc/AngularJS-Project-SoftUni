'use strict';

app.controller('DeleteAdController', function($scope, $http, userAdsService, authenticationService, $routeParams, $location) {
    $http.defaults.headers.common['Authorization'] = authenticationService.authToken();
    
    var adInfo = userAdsService.getById($routeParams.id);
    
    $scope.pageTitle = 'Delete Ad';
    $scope.ad = adInfo;
    
    $scope.deleteAd = function(id) {
        userAdsService.delete(id);
        $location.path('/user/ads');
    };

    userAdsService.getUserAds().$promise.then(function(data) {
        $scope.ads = data;
    }, function(error) {
        console.log(error);
    });
});