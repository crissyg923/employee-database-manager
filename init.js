const inquirer=require('inquirer');
const db = require('./index');
// require('console.table');

function init() {
    
    inquirer.prompt([
        {
            type: 'list',
            name: 'selection',
            choices:[
                'View All Departments',
                'View All Roles',
                'View All Employees',
                'Add a Department',
                'Add a Role',
                'Add an Employee',
                'Update an Employee Role',
                'exit'
            ]
        }
    ])
    
    .then(({selection}) => {
        if(selection==='View All Departments') {
            console.log('Viewing All Departments');
            viewDepartments();
        }
        if(selection==='View All Roles') {
            console.log('Viewing All Roles');
            viewRoles();
        }
        if(selection==='View All Employees') {
            console.log('Viewing All Employes');
            viewEmployees();
        }
        if(selection==='Add a Department') {
            console.log('Adding a department');
            addDept();
        }
        if(selection==='Add a Role') {
            console.log('Adding a Role');
            addRole();
        }
        if(selection==='Add an Employee') {
            console.log('Adding an Employee');
            addEmp();
        }
        if(selection==='Update an Employee Role') {
            console.log('Updating Employee Role');
            updateEmp();
        }
       if(selection==='exit') {
            console.log('Goodbye');
            end();
        }
    });
}


function viewDepartments() {
    db.viewDepartments()
    .then(([response]) => {
        console.table(response);
        init();
    })
};
function viewRoles() {
    db.viewRoles()
    .then(([response]) => {
        console.table(response);
        init();
    })
};
function viewEmployees() {
    db.viewEmployees()
    .then(([response]) => {
        console.table(response);
        init();
    })
};

function end() {
    return process.exit()
}

function addDept () {
    return inquirer.prompt([{
        type: 'input',
        name: 'department',
        message: 'Please enter the name of the department.'
    }])
    .then((data) => {
        let dept = {
            department_name : data.department
        }
        db.addDept(dept)
        console.log('Department Added!')
        init();
        
    })
};

function addRole () {
    return inquirer.prompt([
        {
        type: 'input',
        name: 'title',
        message: 'Please enter the title of the role.'
         },
         {
            type: 'input',
            name: 'salary',
            message: 'Please enter the salary for this role.'
         },
         {
         type: 'input',
         name: 'departmentId',
         message: 'Please enter the department ID associated with this role.'
         }
])
    .then((data) => {
        // if (error) {
        //     console.error('Sorry, there was an error saving role.');
        // }
        let role = {
            title : data.title,
            SALARY :data.salary,
            department_id : data.departmentId
        }
        db.addRole(role)
        console.log("Role Added");
        init();
    })
};

function addEmp () {
    return inquirer.prompt([
        {
        type: 'input',
        name: 'firstname',
        message: 'Please enter the first name of the employee.'
         },
         {
         type: 'input',
         name: 'lastname',
         message: 'Please enter the last name of the employee.'
         },
         {
         type: 'input',
         name: 'roleId',
         message: 'Please enter the role ID associated with the role of this employee.'
         },
         {
         type: 'input',
         name: 'managerId',
         message: 'Please enter the manager ID asocisated with this employee.'
         },

])
    
    .then((data) => {
        let emp = {
            first_name: data.firstname,
            last_name: data.lastname,
            role_id: data.roleId,
            manager_id: data.managerId
        }
        // console.log(firstname, lastname, roleId, managerId);
        db.addEmp(emp)
        // call view employee
        console.log("Employee added!");
        init();
    })
};

function updateEmp () {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'newrole',
            message: 'What is the id of the new role?'
        },
        {
            type: 'input',
            name: 'empid',
            message:'What is the employee ID # of the employee?'
        }
       
    ])
    .then((data) => {
        let role = {
            role_id : data.newrole
        }
        let id = {
            id : data.empid
        }
        
        db.updateEmp(role, id)
        console.log('Employee updated')
        init();
    })

}

init()

