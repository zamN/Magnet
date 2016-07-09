"use strict";
var Accounts    = require('../../models/account-model');
var Auth        = require('../../../../../Common/Authentication/models/authentication');
var redisClient = require('../../../Redis/redisClient')

/**
 * Accounts routes.
 */
module.exports = (router) => {

  router.get('/', function(req, res, next){
    redisClient.set(req.session.id, "smart monkey")
    redisClient.get(req.session.id, function(err, reply) {
      if (err) {
        console.log('redis error' + err)
      }
      else {
        res.send('fart')
      }
    })
  })

/**
 * Create route accepts the following parameters:
 * email, username, password
 * Route is used for creating a new account.
 */
   router.post('/create', function(req, res) {
     Accounts.createNew(req.body)
    //  return success
    // store user in redis with session id
   });

   router.get('/fat', function(req, res){
     Auth.genPassword('fart')
      .then((hash) => {
        res.send(hash);
      }, (err) => {
        res.send(err);
      });
   })

/**
 * Return router so that it can be used by express.
 */
  return router;
}
