"use strict";
var Accounts    = require('../../models/account-model');
var Auth        = require('../../../../../Common/Authentication/authentication');
var redisClient = require('../../../Redis/redisClient')

/**
 * Accounts routes.
 */
module.exports = (router) => {

  router.post('/create', function(req, res){});

  router.put('/update', function(req, res){
    res.send('yayaya')
  });

  router.delete('/delete', function(req, res){});

  router.post('/signin', function(req, res){
    redisClient.set(req.session.id, "smart monkey")
    redisClient.get(req.session.id, function(err, reply) {
      if (err) {
        console.log('redis error' + err);
      }
      else {
        res.send(reply);
      }
    })
  });

  router.get('/:name', function(req, res){
    res.send('fart')
  });

/**
 * Return router so that it can be used by express.
 */
  return router;
}
