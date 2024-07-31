//import connectionMysql from 'mysql2/promise';
const connectionMysql = require('mysql2/promise');

require('dotenv').config();
//connection to the database, use the createPool method to create files connections
const connection = connectionMysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});


module.exports = connection;