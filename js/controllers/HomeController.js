'use strict';

app.controller('HomeController', function($scope, $rootScope, adsService, pageSize) {
    adsService.getAds(null,
            function(data) {
                console.log('we got em');
            },
            function(error) {
                alert("Unable to load ads");
            }
    );
});