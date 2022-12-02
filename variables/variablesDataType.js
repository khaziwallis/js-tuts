/**
 * javascript support Primitive type and non primitive(object) Type of data types
*/
// Primitive Types
let name = 'Amith';
let age = 10;
let result = 10.10;
let isEmployee = true;
let defaultValue;
let nullValue = null;
let bignNumber = Number.MAX_SAFE_INTEGER + 1;
let bingInteger = BigInt(9007199254740991);
let symbol = Symbol('foo');

console.log(name);
console.log(age);
console.log(result);
console.log(isEmployee);
console.log(defaultValue);
console.log(nullValue);
console.log(bignNumber);
console.log(bingInteger);
console.log(symbol);//Symbol(foo)

console.log(typeof name);// string
console.log(typeof age);//number
console.log(typeof result);//number
console.log(typeof isEmployee);// boolean
console.log(typeof defaultValue);// undefined
console.log(typeof nullValue);// object
console.log(typeof bignNumber);// number
console.log(typeof bingInteger);// bigint
console.log(typeof symbol);// symbol

console.log('---------------------------------');
// non primitive or object type
let nameObj = new String('name');
let ageObj = new Number(10);
let resultObj = new Number(10.10);
let isEmployeeObj = new Boolean(true);
let bignNumberObj = new Number(Number.MAX_SAFE_INTEGER + 1);
//let bingIntegerObj = new BigInt(9007199254740991); // Biint is not constructor
//let symbolObj = new Symbol('foo');//Symbol is not a constructor
let employeeArr = new Array();
let employeeObj = new Object();
let employeeList = [];
let employee = {};
console.log(typeof nameObj);// object
console.log(typeof ageObj);//object
console.log(typeof resultObj);//object
console.log(typeof isEmployeeObj);// object
console.log(typeof bignNumberObj);// object
console.log(typeof employeeArr);// object
console.log(typeof employeeObj);// object
console.log(typeof employeeList);// object
console.log(typeof employee);// object

// to identity data is of type array or object
console.log(Array.isArray(employeeArr));
console.log(Array.isArray(employeeList));
console.log(Array.isArray(employee));// false value is of type object

