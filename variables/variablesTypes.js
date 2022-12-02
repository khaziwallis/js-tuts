/**
 * declaring variables with var keyword,
 * var keyword variables are functional scope,
 * default value is undefined, can be re initilized
 */
var name; // declaration
name = 'Rackspace Technologies'; // assignment
console.log(name);


/**
 * declaring variables with const keyword
 * const keyword variables are block space
 * must be initilized while declaring, can not be re declared
 */
//const NAME; //Error: 'const' declarations must be initialized.
//NAME = 'Rackspace Tachnologies';
const COMPANY_NAME = 'Rackspace Tachnologies';
console.log(COMPANY_NAME);
//COMPANY_NAME = 'Rackspace Technologies Again'; //Run Error: const varable values cannot be re-assigned

/**
 * declaring variables with let keyword
 * var keyword variables are block space
 * default value is undefined, can be re initilized
 */
let companyName = 'Rackspace Technologies';
console.log(companyName);


