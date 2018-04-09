'use strict';

/**
 * Module dependencies
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  path = require('path'),
  config = require(path.resolve('./config/config')),
  chalk = require('chalk');

/**
 * Product Schema
 */
var ProductSchema = new Schema({
  sku: {
    type: String,
    unique: true
  },
  name: {
    type: String,
    default: '',
    trim: true,
    required: 'Name cannot be blank'
  },
  description: {
    type: String,
    default: '',
    trim: true
    // required: 'Title cannot be blank'
  },
  image: {
    type: String,
    default: '',
    trim: true
  },
  price: {
    type: Number,
    required: true
  },
  stock: {
    type: Number,
    required: true
  }
  // categories: [{
  //   category_id: {
  //     type: Schema.ObjectId,
  //     ref:'Category'
  //   }
  //
  // }],
  // user: {
  //   type: Schema.ObjectId,
  //   ref: 'User'
  // }
});

ProductSchema.statics.seed = seed;

var Bee = mongoose.model('Product', ProductSchema);
var productData = new Bee({
  sku: 'OP8888',
  name: 'PC1',
  description: 'good',
  image: 'hhhhhh',
  price: 6000,
  stock: 20
});
productData.save(function (error) {
  console.log("yes");
  if(error){
    console.log("no");
  }
})
/**
* Seeds the User collection with document (Article)
* and provided options.
*/
function seed(doc, options) {
  var Product = mongoose.model('Product');

  return new Promise(function (resolve, reject) {

    skipDocument()
      .then(findAdminUser)
      .then(add)
      .then(function (response) {
        return resolve(response);
      })
      .catch(function (err) {
        return reject(err);
      });

    function findAdminUser(skip) {
      var User = mongoose.model('User');

      return new Promise(function (resolve, reject) {
        if (skip) {
          return resolve(true);
        }

        User
          .findOne({
            roles: { $in: ['admin'] }
          })
          .exec(function (err, admin) {
            if (err) {
              return reject(err);
            }

            doc.user = admin;

            return resolve();
          });
      });
    }

    function skipDocument() {
      return new Promise(function (resolve, reject) {
        Product
          .findOne({
            title: doc.title
          })
          .exec(function (err, existing) {
            if (err) {
              return reject(err);
            }

            if (!existing) {
              return resolve(false);
            }

            if (existing && !options.overwrite) {
              return resolve(true);
            }

            // Remove Article (overwrite)

            existing.remove(function (err) {
              if (err) {
                return reject(err);
              }

              return resolve(false);
            });
          });
      });
    }

    function add(skip) {
      return new Promise(function (resolve, reject) {
        if (skip) {
          return resolve({
            message: chalk.yellow('Database Seeding: Product\t' + doc.title + ' skipped')
          });
        }

        var product = new Product(doc);

        product.save(function (err) {
          if (err) {
            return reject(err);
          }

          return resolve({
            message: 'Database Seeding: Product\t' + product.name + ' added'
          });
        });
      });
    }
  });
}
