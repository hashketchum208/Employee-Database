// const inquirer = require("inquirer");
// const { writeFile } = require("fs").promises;
const express = require('express');
// Import and require mysql2 
const mysql = require('mysql2');
// const cTable = require('console.table');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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


app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});