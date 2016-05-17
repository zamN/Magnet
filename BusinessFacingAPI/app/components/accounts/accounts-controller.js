"use strict";
var Accounts = require('../../models/user/user-model.js');

/**
 * Accounts routes.
 */

module.exports = (router) => {

  router.get(function(req, res, next){
    res.send("List of all users" )
  })

/**
 * Create route accepts the following parameters:
 * email, username, password
 * Route is used for creating a new account.
 */
   router.post('/create', function(req, res) {
     Accounts.insert(req.body)
   });

/**
 * Return router so that it can be used by express.
 */
  return router;
}
