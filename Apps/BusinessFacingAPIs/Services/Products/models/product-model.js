"use strict";

const Auth      = require('../../../../Common/Authentication/authentication');
const Promise   = require('bluebird');
const cassandra = require('../../Cassandra/CassandraClient');

class Product {
  constructor(){

  }

  create(api_request, product){
    return new Promise((resolve, reject) => {
      let query = 'INSERT INTO businessfacing.products (id, account, created_on, url) VALUES (?, ?, ?, ?)'
      let params = [product['id'], product['account'], product['created_on'], product['url']]
      cassandra.execute(query, params, { prepare: true }, (err, result) => {
        if (err){
          console.log('SessionID: ', api_request['sessionId'], 'Category: Error', 'Message: ', err)
          reject(err);
        }
        resolve(result);
      });
    })
  }

  read(api_request, product){
    return new Promise((resolve, reject) => {
      let query = 'SELECT * FROM businessfacing.products WHERE id=?';
      cassandra.execute(query, [product['id']], (err, result) => {
        if (err){
          console.log('SessionID: ', api_request['sessionId'], 'Category: Error', 'Message: ', err)
          reject(err);
        }
        resolve(result);
      });
    });
  }

  update(api_request, product){
    return new Promise((resolve, reject) => {
      let query = 'UPDATE businessfacing.products SET url=? WHERE id=?';
      let params = [product['url'], product['id']]
      cassandra.execute(query, params, { prepare: true }, (err, result) => {
        if (err){
          console.log('SessionID: ', api_request['sessionId'], 'Category: Error', 'Message: ', err)
          reject(err);
        }
        resolve(result);
      });
    });
  }

  delete(api_request, product){
    return new Promise((resolve, reject) => {
      let query = 'DELETE FROM businessfacing.products WHERE id=?';
      cassandra.execute(query, [product['id']], (err, result) => {
        if (err){
          console.log('SessionID: ', api_request['sessionId'], 'Category: Error', 'Message: ', err)
          reject(err);
        }
        resolve(result);
      });
    })
  }
}

module.exports = new Product();
