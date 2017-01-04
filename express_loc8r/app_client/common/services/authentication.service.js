﻿(function () {
    angular
        .module('loc8rApp')
        .service('authentication', authentication);
    authentication.$inject = ['$window'];
    function authentication($window) {
        var saveToken = function (token) {
            $window.localStorage['loc8r-token'] = token;
        };
        var getToken = function () {
            return $window.localStorage['loc8r-token'];
        };

        register = function (user) {
            return $http.post('/api/register', user)
                .then(function mySucces(response) {
                    saveToken(response.data.token);
                }, function myError(response) {
                console.log(response);
            });
        };

        login = function (user) {
            return $http.post('/api/login', user)
                .then(function mySucces(response) {
                saveToken(response.data.token);
            }, function myError(response) {
                console.log(response);
            });
        };

        logout = function () {
            $window.localStorage.removeItem('loc8r-token');
        };

        return {
            saveToken: saveToken,
            getToken: getToken,
            register: register,
            login: login,
            logout: logout
        };
    }
})();