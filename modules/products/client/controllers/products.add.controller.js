(function () {
  'use strict';

  angular
    .module('products')
    .controller('ProductsCreateController', ProductsCreateController);

  ProductsCreateController.$inject = ['ProductsService', '$state', '$scope', '$uibModalInstance', 'Upload'];

  function ProductsCreateController(ProductsService, $state, $scope, $uibModalInstance, Upload) {
    // $scope.navigateToCreate = function () {
    //   $state.go('products.new');
    // };
    var vm = this;
    vm.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
    vm.productNew = ProductsService.save();

    // vm.progress = 0;
    //
    // vm.upload = function (dataUrl) {
    //
    //   Upload.upload({
    //     url: '/api/users/picture',
    //     data: {
    //       newProfilePicture: dataUrl
    //     }
    //   }).then(function (response) {
    //     $timeout(function () {
    //       onSuccessItem(response.data);
    //     });
    //   }, function (response) {
    //     if (response.status > 0) onErrorItem(response.data);
    //   }, function (evt) {
    //     vm.progress = parseInt(100.0 * evt.loaded / evt.total, 10);
    //   });
    // };
    //
    // // Called after the user has successfully uploaded a new picture
    // function onSuccessItem(response) {
    //   // Show success message
    //   Notification.success({ message: '<i class="glyphicon glyphicon-ok"></i> Successfully upload product image' });
    //   // Reset form
    //   vm.fileSelected = false;
    //   vm.progress = 0;
    // }
    //
    // // Called after the user has failed to upload a new picture
    // function onErrorItem(response) {
    //   vm.fileSelected = false;
    //   vm.progress = 0;
    //
    //   // Show error message
    //   Notification.error({ message: response.message, title: '<i class="glyphicon glyphicon-remove"></i> Failed to upload product image' });
    // }
  }
}());
