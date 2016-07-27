"use strict";
const cd       = require('cassandra-driver');
const async    = require('async');
const config   = require('../../../config.js');
const cp       = config['cassandra']['contactPoints'];

module.exports = new cd.Client({contactPoints: cp, keyspace: 'businessfacing'});
