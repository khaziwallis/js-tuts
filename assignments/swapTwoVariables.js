let a = 10;
let b = 20;
console.log('before SWAP a, b', a, b);
const swap = () => {
    let temp = a;
    a = b;
    b = temp;
};
swap();
console.log('after SWAP a, b', a, b);

// with ES 6
let x = 10;
let y = 20;
console.log('before SWAP a, b', x, y);
[x, y] = [y, x]; // Destructuring assignment
console.log('after SWAP a, b', x, y);
