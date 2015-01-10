'use strict';

app.factory('townsService', ['$resource', 'baseServiceUrl', function($resource, baseServiceUrl) {
        var resource = $resource(baseServiceUrl + 'towns');
        
        function getAllTowns() {
            return resource.query();
        }

        return {
            getAll: getAllTowns
        };
    }
]);