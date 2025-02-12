const mariadb = require('mariadb');
require('dotenv').config();

const pool = mariadb.createPool({
  host: process.env.HOST_DB,
  user: process.env.USER_DB,
  password: process.env.PASSWORD_DB,
  database: process.env.DATABASE_NAME,
  connectionLimit: 5, 
});



async function testConnection() {
  try {
    const res = await pool.query('SELECT NOW()');
    console.log("Connection successful:", res);
  } catch (err) {
    console.error("Connection error:", err);
  }
}

testConnection();

module.exports = pool;
