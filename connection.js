
// Import and require mysql2 
const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'ranch',
    database: 'user_db'
  },
  console.log(`Connected to the user_db database.`)
);

module.exports = db;