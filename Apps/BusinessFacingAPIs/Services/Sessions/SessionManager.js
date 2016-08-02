"use strict";
const redisClient = require('../redis/redisClient');

class SessionManager {
  constructor(){

  }
  setSession(data){
    return redisClient.setAsync(data['id'], data['body']);
  }

  getSession(id){
    redisClient.getAsync(id, (err, reply) => {
      if (err) {
        console.log('you got an error');
        throw(err);
      }
      return reply;
    });
  }

  expireSession(id){
    return redisClient.setAsync(id, '');
  }
}
