/**
 * understand difference between block and function scope.
 * 
 */
var name = 'Rackspace';
let companyName = 'Rackspace';
// this is function
const print = () => {
    // variable are limited to this function scope
    var age = 10;
    var employeeAge = 20;
    console.log(name);
    console.log(companyName);
    salary = 10000;
}
console.log(salary); // undefined
// this is Block
if (true) {
    var salary = 5000;
}
console.log(salary); // 5000
//console.log(age);// Error: age is not defined
print();
console.log(salary);// 10000
//console.log(age);// Error: age is not defined