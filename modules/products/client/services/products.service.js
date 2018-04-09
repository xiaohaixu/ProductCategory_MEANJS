(function () {
  'use strict';

  angular
    .module('products.services')
    .factory('ProductsService', ProductsService);

  ProductsService.$inject = ['$resource', '$log'];

  function ProductsService($resource, $log) {
    console.log('uuuuuu');
    var Product = $resource('/api/products/:productId', {
      productId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
    return Product;

//     angular.extend(Product.prototype, {
// //       createOrUpdate: function () {
// //         var product = this;
// //         return createOrUpdate(product);
// //       }
// //     });
// //
// //     return Product;
// //
// //     function createOrUpdate(product) {
// //       if (product._id) {
// //         return Product.$update(onSuccess, onError);
// //       } else {
// //         return product.$save(onSuccess, onError);
// //       }
// //
// //       // Handle successful response
// //       function onSuccess(article) {
// //         // Any required internal processing from inside the service, goes here.
// //       }
// //
// //       // Handle error response
// //       function onError(errorResponse) {
// //         var error = errorResponse.data;
// //         // Handle error internally
// //         handleError(error);
// //       }
// //     }
// //
// //     function handleError(error) {
// //       // Log error
// //       $log.error(error);
// //     }
// //   }
// // }());
  }}());
