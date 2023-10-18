INSERT INTO department (department_name)
VALUES  ('ACCOUNTS PAYABLE'),
        ('HR'),
        ('ADMINITSTRATION'),
        ('CUSTODIAL'),
        ('CUSTOMER SERVICE'),
        ('INTERNAL AFFAIRS');

INSERT INTO roles (title, salary, department_id)
VALUES  ('MANAGER', 68000, 1),
        ('SUPERVISOR', 92000, 2),
        ('REPRESENTATIVE', 45000, 4),
        ('ASSOCIATE', 40000, 2),
        ('INDEPENDENT CONTRACTOR', 28000, 3);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES  ('Aisha', 'Curry', 1),
        ('Marlenee', 'Foist', 2,1),
        ('Iberia', 'Quintelles', 2, 2);