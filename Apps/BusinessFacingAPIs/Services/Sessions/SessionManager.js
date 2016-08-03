"use strict";
const redisClient = require('../redis/redisClient');

class SessionManager {
  constructor(){

  }

  setSession(data){
    return redisClient.setAsync(data['id'], data['body'], (err, reply) => {
      if (err) {
        console.log(err)
        return err;
      } else {
        return reply;
      }
    });
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
