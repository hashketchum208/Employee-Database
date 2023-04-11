const db = require("./db/index");
const ctable = require("console.table")
const inquirer = require("inquirer");
// const { writeFile } = require("fs").promises


// Menu
const showMenu = function () {
  inquirer
  .prompt([
      {
        type: "list",
        name: "action",
        message: "What would you like to do?",
                choices: ['Add an employee', 'Add a role', 'Add a department', 'View all departments', 'View all roles', 
        'View all employees', "quit"]
      },
    ])
    .then((answers) => {
      // add
      if (answers.action == "Add an employee") {
        employeeInfo();
      }
       else if (answers.action == "Add a role") {
        roleInfo();
      }
      else if (answers.action == "Add a department") {
        departmentInfo();
      }
    })

      // gets
      then(() => {
      if (answers.action == "View all employees") {
        employeeView();
      }
      else if (answers.action == "View all roles") {
        roleView();
      }
      else if (answers.action == "View all departments") {
        departmentView();
      }

      //quit
      else if (answers.action == "quit") {
        quit()
      }
      
    });
  }
  
 //Add a user
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


//get a user
const departmentView = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "department_view",
        message: [`${this.getDepartment}`],
      },
    ])
    .then((answers) => {
      db.getDepartment(answers)
      return showMenu();
    });
};

const employeeView = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "employee_view",
        message: [`${this.getEmployee}`],
      },
    ])
    .then((answers) => {
      db.getEmployee(answers)
      return showMenu();
    });
};

const roleView = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "role_view",
        message: [`${this.getRole}`],
      },
    ])
    .then((answers) => {
      db.getRole(answers)
      return showMenu();
    });
};


const quit = () => {
  process.exit()
};



showMenu();
  

module.exports = db;