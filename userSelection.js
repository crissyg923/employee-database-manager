const inquirer=require('inquirer');

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
            'Update an Employee Role'
        ]
    }
])

.then(({selection}) => {
    if(selection==='View All Departments') {
        console.log('yes');
    }
}
)