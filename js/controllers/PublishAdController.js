'use strict';

app.controller('PublishAdController', [
    '$scope', 'categoriesService', 'townsService', 'userAdsService', 'authenticationService', '$http',
    function($scope, categoriesService, townsService, userAdsService, authenticationService, $http) {
        $http.defaults.headers.common['Authorization'] = authenticationService.authToken();

        categoriesService.getAll().$promise.then(function(data) {
            $scope.categories = data;
        }, function(error) {
            console.log(error);
        });

        townsService.getAll().$promise.then(function(data) {
            $scope.towns = data;
        }, function(error) {
            console.log(error);
        });

        $scope.fileSelected = function(fileInputField) {
            delete $scope.ad.imageDataUrl;
            var file = fileInputField.files[0];

            if (file.type.match(/image\/.*/)) {
                var reader = new FileReader();

                reader.onload = function() {
                    $scope.ad.imageDataURL = reader.result;
                    $("#image-box").html("<img src='" + reader.result + "'>");
                };

                reader.readAsDataURL(file);
            } else {
                $("#image-box").html("<p>File type not supported!</p>");
            }
        };

        $scope.publish = function(ad) {
            userAdsService.create(ad);
        };
    }
]);