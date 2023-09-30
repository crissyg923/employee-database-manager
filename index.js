const express = require('express');
const mysql = require('mysql2');
require('dotenv').config();

const PORT = process.env.PORT || 3001;
const app = express();

const db = mysql.createConnection(
    {
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
    },
    console.log('Connected')
);

class Database {
    constructor(connection){
        this.connection=connection;
    }

    viewDepartments() {
        return this.connection.promise().query('SELECT department.id, department.department_name FROM department');
    }
    viewRoles() {
        return this.connection.promise().query('SELECT roles.id, roles.title, roles.SALARY FROM roles');
    }

    addEmp(x) {
        return this.connection.promise().query('INSERT INTO employees SET ?', x);
    }
}

module.exports = new Database(db);

// db.query('SELECT * FROM roles', function(err, results) {
//     console.log(results);
// });

// db.query('SELECT * FROM employees', function(err, results) {
//     console.log(results);
// });

// db.query('INSERT INTO department(department_name)VALUES(?)', function(err, results) {

// });

// db.query('INSERT INTO roles(title, salary, department_id)', function(err, results) {

// });

// db.query('INSERT INTO employees(first_name, last_name, role_id, manager_id', function(err, results) {

// });

// db.query('Update employees SET ? Where id=?', function(err, results) {

// });