'use strict';

app.factory('adsService', ['$resource', 'baseServiceUrl', '$http', function($resource, baseServiceUrl, $http) {
        var adsDataUrl = baseServiceUrl + 'ads/';
        var adsResource = $resource(adsDataUrl, null, {
            update: {
                method: 'PUT'
            }
        });

        function getAllAds() {
            return adsResource.get();
        }

        function createNewAd(ad) {
            return adsResource.save(ad);
        }
        
        function getAdById(id) {
            return adsResource.get({id: id});
        }
        
        function editAd(id, ad) {
            return adsResource.update({id: id}, ad);
        }
        
        function deleteAd(id) {
            return adsResource.delete({id: id});
        }

        return {
            getAds: getAllAds,
            create: createNewAd,
            getById: getAdById,
            edit: editAd,
            delete: deleteAd
        };
    }
]);