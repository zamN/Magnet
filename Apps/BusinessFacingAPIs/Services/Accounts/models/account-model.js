"use strict";

const Auth      = require('../../../../Common/Authentication/authentication');
const Promise   = require('bluebird');
const cassandra = require('../../Cassandra/CassandraClient');

class Account {
  constructor(){

  }

  authenticate(identification){

  }

  create(api_request, account){
    return new Promise((resolve, reject) => {
      let query = 'INSERT INTO businessfacing.accounts (name, birthday, business_type, city, email, state, zip) VALUES (?, ?, ?, ?, ?, ?, ?)'
      let params = [account['name'], account['birthday'], account['businessType'], account['city'], account['email'], account['state'], account['zip']]
      cassandra.execute(query, params, { prepare: true }, (err, result) => {
        if (err){
          console.log('SessionID: ', api_request['sessionId'], 'Category: Error', 'Message: ', err)
          reject(err);
        }
        resolve(result);
      });
    })
  }

  read(api_request, account){
    return new Promise((resolve, reject) => {
      let query = 'SELECT * FROM businessfacing.accounts WHERE name=?';
      cassandra.execute(query, [account['name']], (err, result) => {
        if (err){
          console.log('SessionID: ', api_request['sessionId'], 'Category: Error', 'Message: ', err)
          reject(err);
        }
        resolve(result);
      });
    });
  }

  update(api_request, account){
    return new Promise((resolve, reject) => {
      let query = 'UPDATE businessfacing.accounts SET business_type=?, city=?, email=?, state=?, zip=? WHERE name=?';
      let params = [account['businessType'], account['city'], account['email'], account['state'], account['zip'], account['name']]
      cassandra.execute(query, params, { prepare: true }, (err, result) => {
        if (err){
          console.log('SessionID: ', api_request['sessionId'], 'Category: Error', 'Message: ', err)
          reject(err);
        }
        resolve(result);
      });
    });
  }

  delete(api_request, account){
    return new Promise((resolve, reject) => {
      let query = 'DELETE FROM businessfacing.accounts WHERE name=?';
      cassandra.execute(query, [account['name']], (err, result) => {
        if (err){
          console.log('SessionID: ', api_request['sessionId'], 'Category: Error', 'Message: ', err)
          reject(err);
        }
        resolve(result);
      });
    })
  }
}

module.exports = new Account();
