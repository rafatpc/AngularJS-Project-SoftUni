'use strict';

app.factory('adsService', ['$resource', 'baseServiceUrl', '$http', function($resource, baseServiceUrl) {
        var adsDataUrl = baseServiceUrl + 'ads/';
        var adsResource = $resource(adsDataUrl, null, {
            update: {
                method: 'PUT'
            }
        });

        function getAllAds() {
            return adsResource.get();
        }

        return {
            getAds: getAllAds
        };
    }
]);