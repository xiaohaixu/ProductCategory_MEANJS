(function (app) {
  'use strict';

  app.registerModule('products', ['core']);// The core module is required for special route handling; see /core/client/config/core.client.routes
  // app.registerModule('articles.admin', ['core.admin']);
  // app.registerModule('articles.admin.routes', ['core.admin.routes']);
  app.registerModule('products.services');
  app.registerModule('products.routes', ['ui.router', 'ui.bootstrap', 'core.routes', 'products.services']);
}(ApplicationConfiguration));
