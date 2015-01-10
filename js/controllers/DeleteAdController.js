'use strict';

app.controller('DeleteAdController', function($scope, $http, userAdsService, authenticationService, $routeParams, $location, $rootScope) {
    $http.defaults.headers.common['Authorization'] = authenticationService.authToken();

    $rootScope.pageTitle = 'Delete Ad';
    $scope.ad = userAdsService.getById($routeParams.id);
    
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