
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('accounts', function(table){
      table.increments('uid').primary();
      table.string('accountName');
      table.string('password');
      table.string('email');
      table.string('addressNumber');
      table.string('addressStreet');
      table.string('addressUnit');
      table.string('city');
      table.string('state');
      table.string('zipcode');
      table.timestamps();
    }),

    knex.schema.createTable('products', function(table){
      table.increments('id').primary();
      table.string('description');
      table.integer('seller_id')
           .references('uid')
           .inTable('account');
      table.dateTime('postDate');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('account'),
    knex.schema.dropTable('product'),
  ])
};
