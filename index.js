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
      // gets
      // if (answer.action == "View all employees") {
      //   userInfo();
      // }
      // if (answer.action == "View all roles") {
      //   userInfo();
      // }
      // if (answer.action == "View all departments") {
      //   userInfo();
      // }

      //quit

      else if (answers.action == "quit") {
        quit()
      }
      
    })
   
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
        message: "What is your role?",
        choices: ["1", "2", "3", "4"],
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
        message: "department?",
        choices: [1, 2, 3, 4],
      },
    ])
    .then((answers) => {
      console.table([answers])
      return showMenu()
    });
};
//get a user
// const departmentSelect = () => {
//   inquirer
//     .prompt([
//       {
//         type: "list",
//         name: "department_name",
//         message: "view a department",
//         choices: [`${this.addDepartment}`]
//       },
//     ])
//     .then((answers) => {
//       db.getDepartment(answers)
//       showMenu();
//     });
// };

// const employeeSelect = () => {
//   inquirer
//     .prompt([
//       {
//         type: "list",
//         name: "first_name",
//         message: "choose first name",
//       },
//       {
//         type: "input",
//         name: "last_name",
//         message: "What is your last name?",
//       },
//       {
//         type: "list",
//         name: "role_id",
//         message: "What is your role?",
//         choices: ["the man", "a maniac", "my wife", "the sensei"],
//       },
//     ])
//     .then((answers) => {
//       db.addEmployee(answers);
//       showMenu();
//     });
// };

// const roleSelect = () => {
//     inquirer
//       .prompt([
      
//       ])
//       .then((answers) => {
//         db.addRole(answers);
//         showMenu();
//       });
//   };


const quit = () => {
  process.exit()
};



showMenu();
  

module.exports = db;
