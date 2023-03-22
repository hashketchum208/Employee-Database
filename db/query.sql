SELECT department.department_name AS department, employee.first_name, employee.last_name
FROM employee
LEFT JOIN department
ON employee.role_id = role.id
ORDER BY department.department_name;