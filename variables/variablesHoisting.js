/**
 * Hoisting allows using of variable before declaring
 */
console.log(name);
var name;
console.log(name);
name = 'Rackspace Technologies';
console.log(name);

/**
 * variables declared using let and const are not hosited in same way as var.
 * they cannot be accessed before declaring
 */
//console.log(companyName); // Error: Reference Error: companyName is not defined
//console.log(NAME); // Error: NAME is not defined
let companyName = 'Google';
const NAME = 'Google';
console.log(companyName);
console.log(NAME);

