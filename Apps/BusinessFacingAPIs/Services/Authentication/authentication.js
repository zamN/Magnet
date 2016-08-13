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

  verifyPassword(plainTextPassword, hashedPassword, profile){
    return new Promise((resolve, reject) => {
      bcrypt.compare(plainTextPassword, hashedPassword, function(err, bool) {
        if (err) {
          reject(err);
        } else if (bool == false){
          reject(new Error('Invalid Password'));
        } else {
          console.log('resolving profile');
          resolve(profile);
        }
      });
    })
  }

}

module.exports = new Auth;
