'use strict';

app.factory('townsService', ['$resource', 'baseServiceUrl', '$http', function($resource, baseServiceUrl, $http) {
        var resource = $resource(baseServiceUrl + 'towns');
        
        function getAllTowns() {
            return resource.query();
        }

        return {
            getTowns: getAllTowns
        };
    }
]);