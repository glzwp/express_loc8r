﻿(function () {
    angular
        .module('loc8rApp')
        .controller('locationDetailCtrl', locationDetailCtrl);
    locationDetailCtrl.$inject = ['$routeParams', 'loc8rData'];
    function locationDetailCtrl($routeParams, loc8rData) {
        var vm = this;
        vm.locationid = $routeParams.locationid;
        loc8rData.locationById(vm.locationid)
            .then(function mySucces(response) {
                vm.data = { location: response.data };
                vm.pageHeader = {
                    title: vm.data.location.name
                };
            }, function myError(response) {
                console.log(response);
            }
            );
    }
})();