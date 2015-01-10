'use strict';

app.factory('userAdsService', ['$resource', 'baseServiceUrl', '$http', function($resource, baseServiceUrl) {
        var adsAuthDataUrl = baseServiceUrl + 'user/ads/:id';
        var deactivateAdUrl = baseServiceUrl + 'user/ads/Deactivate/:id';
        var activateAdUrl = baseServiceUrl + 'user/Ads/PublishAgain/:id';

        var adsAuthResource = $resource(adsAuthDataUrl, {id: '@id'}, {
            update: {
                method: 'PUT'
            }
        });

        function getAllUserAds() {
            return adsAuthResource.get();
        }

        function createNewAd(ad) {
            return adsAuthResource.save(ad);
        }

        function getAdById(id) {
            return adsAuthResource.get({id: id});
        }

        function deactivateAd(id) {
            return $resource(deactivateAdUrl, {id: '@id'}, {
                update: {
                    method: 'PUT'
                }
            }).update({id: id}, null);
        }

        function activateAd(id) {
            return $resource(activateAdUrl, {id: '@id'}, {
                update: {
                    method: 'PUT'
                }
            }).update({id: id}, null);
        }

        function editAd(id, ad) {
            return adsAuthResource.update({id: id}, ad);
        }

        function deleteAd(id) {
            return adsAuthResource.delete({id: id});
        }

        return {
            getUserAds: getAllUserAds,
            create: createNewAd,
            getById: getAdById,
            edit: editAd,
            deactivate: deactivateAd,
            republish: activateAd,
            delete: deleteAd
        };
    }
]);