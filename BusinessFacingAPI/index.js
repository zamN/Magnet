"use strict";

/**
 * Module dependencies.
 */
const express = require('express');
const app     = express();
const port    = 3000;

/**
 * Imported routes.
 */
const accounts = require('./app/components/accounts/accounts-controller.js')(express.Router());
// const   = require('.app/controllers/')
// const   = require('.app/controllers/')

/**
 * Mounted routes.
 */
app.use('/accounts', accounts);

/**
 * Server listening on variable port.
 */
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
})

// const cluster = require('cluster');
// const numCPUs = require('os').cpus().length;
//
// if (cluster.isMaster) {
//   console.log('Fork %s worker(s) from master', numCPUs);
//   for (var i = 0; i < numCPUs; i++){
//     cluster.fork();
//   }
//   cluster.on('online', function(worker){
//     console.log('Worker is running on %s pid', worker.process.pid);
//   });
//   else if (cluster.isWorker){
//     var port = 3000;
//     console.log('Worker (%s) is now listening to http://localhost:%s', cluster.worker.process.pid, port);
//     app.listen(port);
//   }
// }
