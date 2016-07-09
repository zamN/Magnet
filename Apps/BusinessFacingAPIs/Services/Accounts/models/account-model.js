"use strict";

const Auth = require('../../../../Common/Authentication/authentication');

class Account {
  constructor(){

  }

  createNew(newAccountInfo){
    // check db if accountname exists
    // return if it exists
    // else do the following
    // create the user in the db
    // return user to store in redis
  }

  authenticate(identification){

  }

}

module.exports = new Account();
