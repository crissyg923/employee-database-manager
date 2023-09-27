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

db.query('SELECT * FROM department', function(err, results) {
    console.log(results);
});

db.query('SELECT * FROM roles', function(err, results) {
    console.log(results);
});

db.query('SELECT * FROM employees', function(err, results) {
    console.log(results);
});

db.query('INSERT INTO department(department_name)VALUES(?)', function(err, results) {

});

db.query('INSERT INTO roles(title, salary, department_id)', function(err, results) {

});

db.query('INSERT INTO employees(first_name, last_name, role_id, manager_id', function(err, results) {

});