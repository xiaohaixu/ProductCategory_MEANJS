(function () {
  'use strict';

  angular
    .module('products')
    .controller('ProductsListController', ProductsListController);

  ProductsListController.$inject = ['ProductsService', '$state'];

  function ProductsListController(ProductsService, $state) {
    var vm = this;
    vm.products= ProductsService.query();
  }
}());
