﻿(function () {
    angular
        .module('loc8rApp')
        .controller('reviewModalCtrl', reviewModalCtrl);
    reviewModalCtrl.$inject = ['$uibModalInstance', 'loc8rData','locationData'];
    function reviewModalCtrl($uibModalInstance, loc8rData, locationData) {
        var vm = this;
        vm.locationData = locationData;
        vm.modal = {
            close: function (result) {
                $uibModalInstance.close(result);
            },
            cancel: function () {
                $uibModalInstance.dismiss('cancel');
            }
        };
        vm.onSubmit = function () {
            vm.formError = "";
            if (!vm.formData.rating || !vm.formData.reviewText) {
                vm.formError = "All fields required, please try again";
                return false;
            } else {
                //console.log(vm.formData);
                vm.doAddReview(vm.locationData.locationid, vm.formData);
                return false;
            }
        };

        vm.doAddReview = function (locationid, formData) {
            loc8rData.addReviewById(locationid, {
                rating: formData.rating,
                reviewText: formData.reviewText
            })
                .then(function mySucces(response) {
                    //console.log("Success!");
                    vm.modal.close(response.data);
                }, function myError(response) {
                    vm.formError = "Your review has not been saved, try again";
                }
                );

            return false;
        };
    }
})();