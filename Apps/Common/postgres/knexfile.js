
module.exports = {

  test: {
    client: 'pg',
    // connection: 'postgres://localhost/bookstesting',
    connection: 'postgres://lordvoldemort@pg/magnettesting',
    migrations: {
      directory: __dirname + '/migrations'
    }
  },

  development: {
    client: 'pg',
    // connection: 'postgres://localhost/booksdev',
    connection: 'postgres://lordvoldemort@pg/magnetdev',
    migrations: {
      directory: __dirname + '/migrations'
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: __dirname + '/migrations'
    }
  }
};
