app.factory('authenticationService', function() {
    function saveUserData(data) {
        localStorage.setItem('user', angular.toJson(data));
    }

    function getUserData() {
        return angular.fromJson(localStorage.getItem('user'));
    }

    function getHeaders() {
        var headers = {};
        var userData = getUserData();

        if (userData) {
            headers.Authorization = 'Bearer ' + getUserData().access_token;
        }

        return headers;
    }

    function removeUser() {
        localStorage.removeItem('user');
    }

    return {
        saveUser: saveUserData,
        getUser: getUserData,
        getHeaders: getHeaders,
        removeUser: removeUser
    };
});