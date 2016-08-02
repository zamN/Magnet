"use strict";

const Auth      = require('../../../../Common/Authentication/authentication');
const Promise   = require('bluebird');
const cassandra = require('../../Cassandra/CassandraClient');

class Product {
  constructor(){

  }

  create(api_request, product){
    const query = 'INSERT INTO businessfacing.products (id, account, productcategory, created_on, url, price, quantityavailable, properties) VALUES (?, ?, ?, ?, ?, ?, ?, ?)'
    // need to upload to S3 to get the url
    const id = new Date().getTime() + "-" + Math.floor(Math.random() * 999999999999999) + 1;
    const params = [id, product['account'], product['productcategory'], new Date(), product['url'], product['price'], product['quantityavailable'], JSON.stringify(product['properties'])]
    return cassandra.executeAsync(query, params, { prepare: true });
  }

  read(api_request, product){
    const query = 'SELECT * FROM businessfacing.products WHERE id=?';
    return cassandra.executeAsync(query, [product['id']]);
  }

  update(api_request, product){
    const query = 'UPDATE businessfacing.products SET url=? WHERE id=?';
    const params = [product['url'], product['id']]
    return cassandra.executeAsync(query, params, { prepare: true });
  }

  delete(api_request, product){
    const query = 'DELETE FROM businessfacing.products WHERE id=?';
    return cassandra.executeAsync(query, [product['id']]);
  }

}

module.exports = new Product();
