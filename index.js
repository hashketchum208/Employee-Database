const DB = require("./db/index");
const inquirer = require("inquirer");
const table = require('console.table');
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
      // gets
      if (answers.action == "View all employees") {
        
      }
      else if (answers.action == "View all roles") {
        
      }
      else if (answers.action == "View all departments") {
        deptData()
      }

      //quit
      else if (answers.action == "quit") {
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

//get a user

const deptData = () => {
inquirer.prompt([
  {
    type: 'confirm',
    message: 'Do you want to display the data in a table?',
    name: 'departmentTable',
    default: true
  }
]).then((answers) => {
  const data = [
    { department_name: answers.departmentInfo }
  ];
  if (answers.departmentTable) {
    console.table(data);
  }
  showMenu()
})
};

// const employeeView = () => {
//   inquirer
//     .prompt([
//       {
//         type: 'list',
//         name: "employeeView",
//         message: 'findEmployee?',
//       },
//     ])
//     .then((answers) => { 
//       const data = [
//         { name: answers.first_name, name: answers.last_name}
//       ]
//       console.table(data)
//        showMenu();
//     });
// };

const quit = () => {
  process.exit()
};



showMenu();
  

module.exports = DB;