
const dataArr = [{
    name: 'Ram',
    age: 20,
    id: '123456a'
}, {
    name: 'Shyam',
    age: 24,
    id: '123456b'
}, {
    name: 'Rahim',
    age: 28,
    id: '123456c'
}];

const dataObj = {
    name: 'Rohit',
    age: 32,
    id: '123456d'
};

/**
 * omit properties from data
 */
const [ first, second, ...restArr ] = dataArr;
console.log(first);
console.log(restArr);

const { name, ...restObj } = dataObj;
console.log(first);
console.log(restObj);

/**
 * rename property
 */
const { age: newNamgeAge, ...restObjData } = dataObj;
console.log(newNamgeAge);

/**
 * merge two array
 */
const addArr = [{
    name: 'Rakesh',
    age: 34,
    id: '123456e'
}];
const newArry = [ ...addArr, ...dataArr ];
console.log(newArry);

/**
 * add object to arrar
 */
console.log([...dataArr, dataObj]);

/**
 * add peroperies to obj
 */

console.log({ ...dataObj, salary: 50000 });