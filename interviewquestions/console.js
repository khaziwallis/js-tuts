
console.log(10 + '10'); // 1010
console.log(true + '1'); // true1
console.log('10' + '10');// 1010
console.log(true + true);// 2
console.log(false + false); // 0
console.log(true + false); // 1
console.log(typeof null);// object
console.log(null === null);// true
console.log(typeof {});// object
console.log(typeof []);// object
console.log(Array.isArray([]));//true
console.log(Array.isArray({}));//false
console.log("" ? 'am true' : 'am false');//am false
console.log(undefined ? 'am true' : 'am false');//am false
console.log(0 ? 'am true' : 'am false');//am false
console.log(-0 ? 'am true' : 'am false');//am false
console.log(NaN ? 'am true' : 'am false');//am false
console.log(null ? 'am true' : 'am false');//am false
console.log("test" ? 'am true' : 'am false');//am true
console.log(1 ? 'am true' : 'am false');//am true
console.log(-1 ? 'am true' : 'am false');//am true
console.log([] ? 'am true' : 'am false');//am true
console.log({} ? 'am true' : 'am false');//am true
console.log(function foo () {} ? 'am true' : 'am false');//am true
const fooAgain = () => {};
console.log(fooAgain ? 'am true' : 'am false');//am true
