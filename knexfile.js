module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres:///gogot'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};