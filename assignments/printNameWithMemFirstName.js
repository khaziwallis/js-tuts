
const printName = (firstName) => {
    return (name) => {
        return `${firstName} ${name}`
    };
};

const printNameFun = printName('DR.');

console.log(printNameFun('Ginny'));
console.log(printNameFun('Gram Smith'));