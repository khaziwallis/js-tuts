let x = 100;
/**
 * on browser this will not give error,
 * but it wont delte x vallue also.
 * As delete is used to remove attributes of an object
*/
//delete x;// error in node console
console.log(x);

let obj = {
    name: 'test',
    age: 20
};
console.log(obj);
delete obj.age;

console.log(obj);
