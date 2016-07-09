"use strict";

/**
 * Middleware for testing. 
 */
 
/**
 * Module dependencies.
 */
const express = require('express');
const app     = express();
const port    = 1337;

/**
 * Imported routes. 
 */
const users   = require('../controllers/users/user-ctrl.js')(express.Router());
// const   = require('.app/controllers/')
// const   = require('.app/controllers/')

/**
 * Mounted routes. 
 */
app.use('/users', users);

/**
 * Server. 
 */
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
})

module.exports = app;
