"use strict";

const Auth      = require('../../../../Common/Authentication/authentication');
const Promise   = require('bluebird');
const cassandra = require('../../Cassandra/CassandraClient');

class Account {
  constructor(){

  }

  authenticate(api_request, credentials) {
    const query = 'SELECT * FROM businessfacing.accounts WHERE name=?';
    const params = [credentials['name']];
    console.log(credentials['name'])
    return cassandra
     .executeAsync(query, params, { prepare: true })
     .then(result => Auth.verifyPassword(credentials['password'], result['rows'][0]['password']))
     .catch(err => err)
  }

  create(api_request, account){
    const query = 'INSERT INTO businessfacing.accounts (name, password, birthday, business_type, city, email, phone_number, state, zip) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
    return Auth
      .genPassword(account['password'])
      .then(hashedPassword => cassandra.executeAsync(query, [account['name'], hashedPassword, account['birthday'], account['businessType'], account['city'], account['email'], account['phone_number'], account['state'], account['zip']], { prepare: true }))
      .catch(err => err);
  }

  read(api_request, account){
    const query = 'SELECT * FROM businessfacing.accounts WHERE name=?';
    return cassandra.executeAsync(query, [account['name']]);
  }

  update(api_request, account){
    const query = 'UPDATE businessfacing.accounts SET business_type=?, phone_number=?, city=?, email=?, state=?, zip=? WHERE name=?';
    const params = [account['business_type'], account['phone_number'], account['city'], account['email'], account['state'], account['zip'], account['name']]
    return cassandra.executeAsync(query, params, { prepare: true });
  }

  delete(api_request, account){
    const query = 'DELETE FROM businessfacing.accounts WHERE name=?';
    return cassandra.executeAsync(query, [account['name']]);
  }
}

module.exports = new Account();
