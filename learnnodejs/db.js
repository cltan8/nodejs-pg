// DATABASE CONNECTIONS
var pg = require('pg');

var config = {
  host: 'localhost',
  user: 'postgres', //env var: PGUSER
  database: 'heytourguidedb', //env var: PGDATABASE
  password: 'Hulk123!?', //env var: PGPASSWORD
  port: 5432, //env var: PGPORT
  max: 10, // max number of clients in the pool
  idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
};

var Pool = require('pg-pool');
var pool = new Pool(config);

pool.on('error', function (err, client) {
  // if an error is encountered by a client while it sits idle in the pool
  // the pool itself will emit an error event with both the error and
  // the client which emitted the original error
  // this is a rare occurrence but can happen if there is a network partition
  // between your application and the database, the database restarts, etc.
  // and so you might want to handle it and at least log it out
  console.error('idle client error', err.message, err.stack)
})

module.exports = pool;