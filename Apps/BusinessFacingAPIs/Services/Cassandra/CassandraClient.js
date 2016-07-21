"use strict";
const cd       = require('cassandra-driver');
const async    = require('async');
const config   = require('../../../config.js');
const cp       = config['cassandra']['contactPoints'];

class Cassandra {
  constructor(){
    this.client = new cd.Client({contactPoints: cp, keyspace: 'businessfacing'});
  }

  loginToAccount(account){

  }

  createAccount(account){
    let query = `INSERT INTO businessfacing.accounts (name, birthday, businessType, city, email, state, zip, phoneNumber)
                 VALUES (${account['name']}, ${account['birthday']}, ${account['businessType']}, ${account['city']}, ${account['email']}, ${account['state']}, ${account['zip']}, ${account['phoneNumber']});`
    this.client.execute(query, (err, result) => {
      if (err){
        console.log(`some error: ${err}`)
      }
      console.log(`the result is: ${result}`)
    });
  }

  readAccount(){

  }

  updateAccount(){

  }

  deleteAccount(){

  }
}

module.exports = new Cassandra();
