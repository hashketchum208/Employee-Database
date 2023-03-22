const express = require('express')
const department = require('./api/department')
const employee = require('./api/employee')
const role = require('./api/role')

const app = express();

app.use('./api/department.js', department)
app.use('./api/employee.js', employee)
app.use('./api/role.js', role)