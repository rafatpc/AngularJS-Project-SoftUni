'use strict';

app.factory('categoriesService', ['$resource', 'baseServiceUrl', function($resource, baseServiceUrl) {
        var resource = $resource(baseServiceUrl + 'categories');

        function getAllCategories() {
            return resource.query();
        }

        return {
            getAll: getAllCategories
        };
    }
]);