DROP DATABASE IF EXISTS user_db;
CREATE DATABASE user_db;

USE user_db;
 
CREATE TABLE department (
   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
   department_name VARCHAR(30) NOT NULL
 );

CREATE TABLE role (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
     title VARCHAR(30) NOT NULL, 
     department_id INT, 
     salary DECIMAL(7,2),
     FOREIGN KEY (department_id)
     REFERENCES department(id)
     ON DELETE SET NULL
 );

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT,
  FOREIGN KEY (role_id)
  REFERENCES employee(id)
  ON DELETE SET NULL
 );
 
 
     