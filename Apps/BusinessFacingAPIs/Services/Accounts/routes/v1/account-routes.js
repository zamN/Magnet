"use strict";
const Account    = require('../../models/account-model');
const Auth        = require('../../../../../Common/Authentication/authentication');
const redisClient = require('../../../Redis/redisClient');
const errors      = '';
const Promise     = require('bluebird');

/**
 * Accounts routes.
 */
module.exports = (router) => {

  router.post('/v1/create', function(req, res){
    Account.create({}, req.body)
      .then((result) => {
        res.json(result)
      }, (err) => {
        res.json(err)
      });
  });

  router.get('/v1/:name', function(req, res){
    Account.read({}, req.params)
      .then((result) => {
        res.json(result);
      }, (err) => {
        res.json(err);
      });
  });

  router.put('/v1/:name', function(req, res){
    Account.update({}, req.body)
      .then((result) => {
        res.json(result);
      }, (err) => {
        res.json(err);
      });
  });

  router.delete('/v1/:name', function(req, res){
    Account.delete({}, req.params)
      .then((result) => {
        res.json(result);
      }, (err) => {
        res.json(err);
      });
  });

  router.post('/v1/login', function(req, res){
    Account.login({}, req.body)
      .then((result) => {
        res.json(result);
      }, (err) => {
        res.json(err);
      });
  });

  router.get('/v1/logout', function(req, res){
    Account.logout({}, req.body)
      .then((result) => {
        res.json(result);
      }, (err) => {
        res.json(err);
      });
  });

  router.get('/v1/newPassword', function(req, res){

  });
/**
 * Return router so that it can be used by express.
 */
  return router;
}
