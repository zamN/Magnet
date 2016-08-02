"use strict";
const Analytics = require('../../models/statistics-model');
const Promise = require('bluebird');

/**
 * Products routes.
 */
module.exports = (router) => {


  router.get('/v1/:name', function(req, res){
    Analytics.getAll({}, req.params)
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
