const inquirer = require("inquirer");
const ctable = require('console.table');
const mysql = require('mysql2');
// const { writeFile } = require("fs").promises

const connection = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'ranch',
    database: 'user_db'
  },
  console.log(`Connected to the user_db database.`)
);

// Menu
const showMenu = function () {
  inquirer
  .prompt([
      {
        type: "list",
        name: "action",
        message: "What would you like to do?",
                choices: ['Add an employee', 'Add a role', 'Add a department', 'View all departments', 'View all roles', 
        'View all employees', "Quit"]
      },
    ])
    .then((answers) => {
      // add
      if (answers.action == "Add an employee") {
        employeeInfo()
      }
       else if (answers.action == "Add a role") {
        roleInfo();
      }
      else if (answers.action == "Add a department") {
        departmentInfo();
      }
      // gets
      if (answers.action == "View all employees") {
        connection.query("select first_name, last_name from employee", ((err, results) => {
          if(err) {
              throw err;
          }
          console.table(results);
          return showMenu()
  }))
      }
      else if (answers.action == "View all roles") {
        connection.query("select title from role", ((err, results) => {
          if(err) {
              throw err;
          }
          console.table(results);
          return showMenu()
  }))
      }
      else if (answers.action == "View all departments") {
        connection.query("select department_name, id from department", ((err, results) => {
          if(err) {
              throw err;
          }
          console.table(results);
          return showMenu()
        }));
      }
      else if (answers.action == "Quit") {
        quit()
      }
    });
  }
  
 //Add
    const departmentInfo = () => { 
    inquirer
    .prompt([
      {
        type: "input",
        name: "department_name",
        message: "enter a department?",
      },
    ])
    .then((answers) => {
      console.table([answers])
        return showMenu()
      })
  };

const employeeInfo = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "first_name",
        message: "What is your first name?",
      },
      {
        type: "input",
        name: "last_name",
        message: "What is your last name?",
      },
      {
        type: "list",
        name: "role_id",
        message: "What is your role? 1: the man, 2: a maniac, 3: my wife, 4: the sensei",
        choices: [1, 2, 3, 4],
      },
    ])
    .then((answers) => {
      console.table([answers])
      return showMenu()
    });
};

const roleInfo = () => {
  inquirer
    .prompt([
      {
        type: "text",
        name: "title",
        message: "What is the new role?",
      },
      {
        type: "input",
        name: "salary",
        message: "What is the salary?",
      },
      {
        type: "list",
        name: "department_id",
        message: "department? 1: Manager, 2: Engineer, 3: Satan, 4: Janitor",
        choices: [1, 2, 3, 4],
      },
    ])
    .then((answers) => {
      console.table([answers])
      return showMenu()
    });
};

showMenu();