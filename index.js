const db = require("./db/index");
// const ctable = require("console.table")
const inquirer = require("inquirer");
// const { writeFile } = require("fs").promises

// Menu
const showMenu = () => {
  inquirer
  .prompt([
      {
        type: "list",
        name: "action",
        message: "What would you like to do?",
        choices: ["Add an employee", "Add a role", "Add a department", "quit"],
      },
    ])

    .then((answer) => {
      // add
      if (answer.action == "Add an employee") {
        employeeInfo();
      }
      if (answer.action == "Add a role") {
        roleInfo();
      }
      if (answer.action == "Add a department") {
        departmentInfo();
      }
      //gets
      // if (answer.action == "Get a employee") {
      //   employeeSelect();
      // }
      // if (answer.action == "Get a role") {
      //   roleSelect();
      // }
      // if (answer.action == "Get a department") {
      //   departmentSelect();
      // }
      //quit

      if (answer.action == "quit") {
        quit();
      }
    });
};

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
      db.addDepartment(answers).then(showMenu());
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
        type: "list",
        name: "role_id",
        message: "What is your role?",
        choices: ["1", "2", "3", "4"],
      },
    ])
    .then((answers) => {
      db.addEmployee(answers).then(showMenu());
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
      db.addRole(answers).then(showMenu());
    });
};

//get a user
// const departmentSelect = () => {
//   inquirer
//     .prompt([
//       {
//         type: "list",
//         name: "department_name",
//         message: "select a department",
//         choices: [(answers)]
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
//         {
//           type: "input",
//           name: "title",
//           message: "What is the new role?",
//         },
//         {
//           type: "input",
//           name: "salary",
//           message: "What is the salary?",
//         },
//         {
//           type: "list",
//           name: "department_id",
//           message: "department?",
//           choices: ["Manager", "Engineer", "Satan", "Janitor"]
//         },
//       ])
//       .then((answers) => {
//         db.addRole(answers);
//         showMenu();
//       });
//   };
const quit = () => {
  process
    .exit()
    .then((answers) => {
      console.log(answers);
    })
    .catch((err) => {
      console.error(err);
    });
};

const init = () => {
  showMenu()
    // .then((answers) => writeFile("db/seeds.sql", showMenu(answers)))
    // .then(() => console.log("Successfully wrote to seeds"))
    // .catch((err) => console.error(err));
};

init();

module.exports = db;
