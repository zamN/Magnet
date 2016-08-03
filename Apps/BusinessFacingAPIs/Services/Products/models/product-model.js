"use strict";

const Auth      = require('../../../../Common/Authentication/authentication');
const Promise   = require('bluebird');
const Cassandra = require('../../Cassandra/CassandraClient');

class Product {
  constructor(){

  }
// https://www.facebook.com/PoeticKineticsArt/videos/1057350254302466/
  create(req){
    const query = 'INSERT INTO businessfacing.products (id, account, productcategory, created_on, url, price, quantityavailable, properties) VALUES (?, ?, ?, ?, ?, ?, ?, ?)'
    // need to upload to S3 to get the url
    const id = new Date().getTime() + "-" + Math.floor(Math.random() * 999999999999999) + 1;
    return Session
     .getSession(req.session)
     .then(session => Cassandra.executeAsync(query, [id, session['name'], req.body['productcategory'], new Date(), req.body['url'], req.body['price'], req.body['quantityavailable'], JSON.stringify(req.body['properties'])], { prepare: true }))
     .catch(err => err);
  }

  read(req){
    const query = 'SELECT * FROM businessfacing.products WHERE name=? AND category=? AND id=?';
    return Session
     .getSession(req.session)
     .then(session => Cassandra.executeAsync(query, [session['name'], req.body['category'], req.body['id']]))
     .catch(err => err);
  }

  update(req){
    const query = 'UPDATE businessfacing.products SET url=? WHERE id=?';
    return Session
     .getSession(req.session)
     .then(sesion => Cassandra.executeAsync(query, [product['url'], session['id']], { prepare: true }))
     .catch(err => err);
  }

  delete(req){
    const query = 'DELETE FROM businessfacing.products WHERE id=?';
    return Session
     .getSession(req.session)
     .then(sesion => Cassandra.executeAsync(query, [session['id']]))
     .catch(err => err);
  }

}

module.exports = new Product();
