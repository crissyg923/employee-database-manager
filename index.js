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

// This class creates all of the database queries and attaches them to a promise.
class Database {
    constructor(connection){
        this.connection=connection;
    }

    viewDepartments() {
        return this.connection.promise().query('SELECT department.id, department.department_name FROM department');
    }
    viewRoles() {
        return this.connection.promise().query('SELECT roles.id, roles.title, roles.SALARY, roles.department_id  FROM roles');
    }
    viewEmployees() {
        return this.connection.promise().query('Select employees.id, employees.first_name, employees.last_name, employees.role_id, employees.manager_id FROM employees')
    }
    addDept(dept) {
        return this.connection.promise().query('INSERT INTO department SET ?', dept);
    }
    addRole(role){
        return this.connection.promise().query('INSERT INTO roles SET ?', role);
    }

    addEmp(x) {
        return this.connection.promise().query('INSERT INTO employees SET ?', x);
    }
    updateEmp(x,y){
        return this.connection.promise().query('UPDATE employees SET role_id = ? WHERE employees.id = ?', [x, y]);
    }
}

module.exports = new Database(db);

