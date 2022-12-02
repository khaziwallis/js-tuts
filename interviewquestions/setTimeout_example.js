/**
 * use this site to understand flow: https://www.jsv9000.app/
 * 
 * setTimeout is web api,
 * it is execute after all js executes, 
 * in same order as its passed consider its timeout value
 */
console.log(1);

setTimeout(() => console.log(2));

setTimeout(() => console.log(10), 100);

Promise.resolve().then(() => console.log(3));

Promise.resolve().then(() => setTimeout(() => console.log(4)));

Promise.resolve().then(() => console.log(5));

setTimeout(() => console.log(6));

console.log(7);

/**
 * output
 * -----------
 * 1
 * 7
 * 3
 * 5
 * 2
 * 6
 * 4
 * 10
*/
