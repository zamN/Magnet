"use strict";
const Product = require('../../models/product-model');
const Promise = require('bluebird');

/**
 * Accounts routes.
 */
module.exports = (router) => {

  router.post('/v1/create', function(req, res){
    Product.create({}, req.body)
      .then((result) => {
        res.json(result)
      }, (err) => {
        res.json(err)
      });
  });

  router.get('/v1/:id', function(req, res){
    Product.read({}, req.params)
      .then((result) => {
        res.json(result);
      }, (err) => {
        res.json(err);
      });
  });

  router.put('/v1/:id', function(req, res){
    Product.update({}, req.body)
      .then((result) => {
        res.json(result);
      }, (err) => {
        res.json(err);
      });
  });

  router.delete('/v1/:id', function(req, res){
    Product.delete({}, req.params)
      .then((result) => {
        res.json(result);
      }, (err) => {
        res.json(err);
      });
  });

/**
 * Return router so that it can be used by express.
 */
  return router;
}
