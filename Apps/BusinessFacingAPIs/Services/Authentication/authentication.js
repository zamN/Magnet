"use strict";

const bcrypt = require('bcrypt');

class Auth {

  constructor(){
    this.saltRounds = 8;
  }

  genPassword(plainTextPassword){
    return new Promise((resolve, reject) => {
      bcrypt.hash(plainTextPassword, this.saltRounds, function(err, hash) {
        if (err) {
          reject(err);
        }
        else {
          resolve(hash);
        }
      });
    })
  }

  verifyPassword(plainTextPassword, profile){
    return new Promise((resolve, reject) => {
      bcrypt.compare(plainTextPassword, profile['rows'][0]['password'], function(err, bool) {
        if (err) {
          reject(err);
        }
        else {
          resolve(profile);
        }
      });
    })
  }

}

module.exports = new Auth;
