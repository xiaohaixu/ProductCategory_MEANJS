(function () {
  'use strict';

  angular
    .module('products.routes')
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('products', {

        url: '/products',
        templateUrl: '/modules/products/client/views/products.html'
      })
      .state('products.list', {

        url: '',
        templateUrl: '/modules/products/client/views/products.html',
        controller: 'ProductsListController',
        controllerAs: 'vm'
      })
      .state('products.create', {
        parent: 'products.list',
        url: '/create',
        onEnter: ['$uibModal', '$state', function($uibModal, $state) {
          console.log('Open modal');
          $uibModal.open({
            templateUrl: '/modules/products/client/views/product-add.html',
            controller: 'ProductsCreateController',
            controllerAs: 'vm'
            // backdrop: false,
            // windowClass: 'right fade'
          // }).result.finally(function() {
          //   $state.go('products.list');
           }).result.then(function() {
            $state.go('products.list', null, { reload: 'products.list' });
          }, function() {
            $state.go('^');
          });;
        }],


        // views: {
        //   'editView': {
        //     controller: 'ProductsCreateController',
        //     controllerAs: 'vm',
        //     templateUrl: '/modules/products/client/views/product-add.html'
        //   }
        // }
      })
    //   .state('products.new', {
    //     url: '/new',
    //     template: '<div ui-view class=""></div>',
    //     controller: 'ProductsCreateController',
    //     controllerAs: 'vm'
    // })
      // .state('articles.view', {
      //   url: '/:articleId',
      //   templateUrl: '/modules/articles/client/views/view-article.client.view.html',
      //   controller: 'ArticlesController',
      //   controllerAs: 'vm',
      //   resolve: {
      //     articleResolve: getArticle
      //   },
      //   data: {
      //     pageTitle: '{{ articleResolve.title }}'
      //   }
      // });
  }

  // getArticle.$inject = ['$stateParams', 'ArticlesService'];
  //
  // function getArticle($stateParams, ArticlesService) {
  //   return ArticlesService.get({
  //     articleId: $stateParams.articleId
  //   }).$promise;
  // }
}());
