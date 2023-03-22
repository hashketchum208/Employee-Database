const inquirer = require("inquirer");
const fs = require("fs")
// const cTable = require('console.table');

const userArr = [];

// Menu
const showMenu = () => {
  inquirer.prompt([{
    type: "list",
    name: "action",
    message: "What would you like to do?",
    choices: [
      "Add an employee",
      "Add a role",
      "Add a department",
    ]
  }])
  .then(answer => {
    if(answer.action == "Add an employee") {
      employeeInfo()
    }

    if(answer.action == "Add a role") {
      roleInfo()
    }

    if(answer.action == "Add a department") {
      departmentInfo()
    }
    })
};

// various Inquire Info

 const departmentInfo = () => {
  inquirer 
    .prompt([
      {
        type: "input",
        name: "department_name",
        message: "What is your department?",
      },
     
    ])
 
    .then((answers) => {
      const newDepartment = new Department(answers.department_name,)
      userArr.push(newDepartment);
      showMenu();
    });
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
        type: "checkbox",
        name: "role_id",
        message: "What is your role?",
        choices: [],
      },
    ])
 
    .then((answers) => {
      const newEmployee = new Employee(answers.first_name, answers.last_name, answers.role, answers.department, answers.salary,)
      userArr.push(newEmployee);
      showMenu();
    });
 };

 const roleInfo = () => {
  inquirer 
    .prompt([
      {
        type: "input",
        name: "title",
        message: "What is the new role?",
      },
      {
        type: "input",
        name: "salary",
        message: "What is the salary?",
      },
      {
        type: "input",
        name: "department_id",
        message: "What is the department for this role?"
      },
    ])
 
    .then((answers) => {
      const newRole = new Role(answers.title, answers.salary, answers.department_id)
      userArr.push(newRole);
      showMenu();
    });
 };

 const init = () => {
  employeeInfo()
};
 init();



 