/**
 * Module dependencies.
 */
const redis    = require('redis');
const bluebird = require('bluebird');

// Promisify redis functions
bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

// Create Redis client
const redisClient = redis.createClient({host: 'redis'});

// Export redis.
module.exports = redisClient;
