'use strict';

var products;
/**
 * Module dependencies
 */
// var articlesPolicy = require('../policies/products.server.policy'),
  products = require('../controllers/products.server.controller');

module.exports = function (app) {
  // Products collection routes
  app.route('/api/products')
    .get(products.list)
    .post(products.create);

  // Single Product routes
  app.route('/api/products/:id')
    .get(products.read)
    .put(products.update)
    .delete(products.delete);

  // Finish by binding the product middleware
  app.param('product', products.productById);
};
