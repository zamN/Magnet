"use strict";

const Auth      = require('../../../../Common/Authentication/authentication');
const Cassandra =  require('../../Cassandra/CassandraClient');
const Promise   = require('bluebird');
const Session   = require('../../Sessions/SessionManager');

class Account {
  constructor(){}

  authenticate(req) {
    const query = 'SELECT * FROM businessfacing.accounts WHERE name=?';
    const params = [req.body['name']];
    return Cassandra
     .executeAsync(query, params, { prepare: true })
     .then(profile => Auth.verifyPassword(req.body['password'], profile['rows'][0]['password'], profile))
     .then(profile => Session.setSession({id: req.session, data: profile}))
     .catch(err => err)
  }

  create(req){
    // const query = 'INSERT INTO businessfacing.accounts (name, password, birthday, business_type, city, email, phone_number, state, zip) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?) IF NOT EXISTS';
    const query = 'INSERT INTO businessfacing.accounts (name, password, birthday, business_type, city, email, phone_number, state, zip) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
    return Auth
     .genPassword(req.body['password'])
     .then(hashedPassword => Cassandra.executeAsync(query, [req.body['name'], hashedPassword, req.body['birthday'], req.body['business_type'], req.body['city'], req.body['email'], req.body['phone_number'], req.body['state'], req.body['zip']], { prepare: true }))
    //  .then(profile => Session.setSession({id: req.session, data: profile['rows'][0]}))
     .then(profile => Session.setSession({id: req.session, data: 'steve'}))
     .catch(err => err);
  }

  read(req){
    const query = 'SELECT * FROM businessfacing.accounts WHERE name=?';
    return Session
     .getSession(req.session)
     .then(session => Cassandra.executeAsync(query, [session['name']]))
     .catch(err => err)
  }

  update(req){
    const query = 'UPDATE businessfacing.accounts SET business_type=?, phone_number=?, city=?, email=?, state=?, zip=? WHERE name=?';
    return Session
     .getSession(req.session)
     .then(session => Cassandra.executeAsync(query, [req.body['business_type'], req.body['phone_number'], req.body['city'], req.body['email'], req.body['state'], req.body['zip'], session['name']], { prepare: true }))
     .catch(err => err)
  }

  delete(req){
    const query = 'DELETE FROM businessfacing.accounts WHERE name=?';
    return Session
     .getSession(req.session)
     .then(session => Cassandra.executeAsync(query, [session['name']]))
     .catch(err => err)
  }
}

module.exports = new Account();
