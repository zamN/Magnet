"use strict";

const Auth      = require('../../../../Common/Authentication/authentication');
const Promise   = require('bluebird');
const cassandra = require('../../Cassandra/CassandraClient');

class Account {
  constructor(){

  }

  authenticate(identification){

  }

  create(account){
    console.log(account)
    cassandra.execute(cq.createAccount(account), (err, result) => {

    });
  }

}

module.exports = new Account();
