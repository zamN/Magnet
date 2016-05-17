"use strict";

/**
 * Product routes.
 */

module.exports = (router) => {

router.get('/new', function(req, res){
    res.send('Create New Property Form')
})

/**
 * Return router so that it can be used by express.
 */
  return router;
}
