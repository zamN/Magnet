"use strict";
const Promise = require('bluebird');
const async   = require('async');
const config  = require('../../../config.js');
const cd      = Promise.promisifyAll(require('cassandra-driver'))
const cp      = config['cassandra']['contactPoints'];

module.exports = new cd.Client({contactPoints: cp, keyspace: 'businessfacing'});
