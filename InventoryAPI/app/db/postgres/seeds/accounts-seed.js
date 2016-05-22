const faker = require('faker');

exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('accounts').del()
      .then(function(){
        return knex('accounts').insert({
          accountName: faker.internet.userName(),
          email: faker.internet.email(),
          password: faker.internet.color()
        })
      })
      .then(function(){
        return knex('accounts').insert({
          accountName: faker.internet.userName(),
          email: faker.internet.email(),
          password: faker.internet.color()
        })
      })
      .then(function(){
        return knex('accounts').insert({
          accountName: faker.internet.userName(),
          email: faker.internet.email(),
          password: faker.internet.color()
        })
      })
      .then(function(){
        return knex('accounts').insert({
          accountName: faker.internet.userName(),
          email: faker.internet.email(),
          password: faker.internet.color()
        })
      })
      .then(function(){
        return knex('accounts').insert({
          accountName: faker.internet.userName(),
          email: faker.internet.email(),
          password: faker.internet.color()
        })
      })
  );
};
