// const connection = require('../connection');


// class DB{
//   constructor(connection) {
//     this.connection = connection;
//   }

//   addRole(role) {
//     return this.connection.promise().query('INSERT INTO role SET ?', role)
//   }
//   addEmployee(employee) {
//     return this.connection.promise().query('INSERT INTO employee SET ?', employee)
//   }
//    addDepartment(department) {
//     return this.connection.promise().query('INSERT INTO department SET ?', department)
//   }


//   // getRole(role) {
//   //   return this.connection.promise().query('SELECT * FROM role (title, department_id, salary) VALUES (?)', role)
//   // }
//   // getEmployee(employee) {
//   //   return this.connection.promise().query('SELECT * FROM employee (first_name, last_name, role_id) VALUES (?)', employee)
//   // }
//   // getDepartment(department) {
//   //   return this.connection.promise().query('SELECT * FROM department (department_name) VALUES (?)', department)
//   // }

// };

// module.exports = new DB(connection);