/**
 * const and let variables are always bock scope.
 * it can be used in same of inner scope
 */
var name = 'Rackspace';
let companyName = 'Rackspace';
const NAME = 'Rackspace';

if (true) {
    var nameBlock = 'Rackspace';
    let companyNameBlock = 'Rackspace';
    const NAME_BLOCK = 'Rackspce';

    console.log(name);
    console.log(companyName);
    console.log(NAME); 
}

console.log(name);
console.log(companyName);
console.log(NAME);

console.log(nameBlock);
//console.log(companyNameBlock); //Error: companyNameBlock is not defined
//console.log(NAME_BLOCK); //Error: NAME_BLOCK is not defined
