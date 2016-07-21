"use strict";
const Accounts    = require('../../models/account-model');
const Auth        = require('../../../../../Common/Authentication/authentication');
const redisClient = require('../../../Redis/redisClient');
const errors      = '';
const Promise     = require('bluebird');

/**
 * Accounts routes.
 */
module.exports = (router) => {

  router.post('/v1/create', function(req, res){
    // return Promise.try(() => {
    //   console.log(req.body)
    //   return
    //   return Account.create(req.body);
    // }).then((result) => {
    //   res.json(result)
    // }).catch(UsernameTaken, (err) => {
    //   res.send(errors['usernameTaken'])
    // })
    res.send(req.body)
  });

  router.get('/:name', function(req, res){
    res.send('fart')
  });

  router.put('/:name', function(req, res){
    res.send('fart')
  });

  router.delete('/:name', function(req, res){
    res.send('fart')
  });

/**
 * Return router so that it can be used by express.
 */
  return router;
}
