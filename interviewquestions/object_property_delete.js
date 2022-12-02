const Employee = {
    salary: 1000
};

const employee = Object.create(Employee);
// due to hirerchical inheritance, salary of parent will be taken
console.log(employee.salary);//1000
employee.salary = 5000;
console.log(employee.salary); //5000
delete employee.salary;
delete employee.salary;// from object, we cant delete class property
console.log(employee.salary);//1000
delete Employee.salary;// this will delete Employee Class property
console.log(employee.salary);// undefined