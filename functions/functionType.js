//print1(); //Error: print1 is not defined
//print2(); //Error: print2 is not defined
print3(); // Decleration function are Hoisted, can be used before decleration

// Lambda Function
const print1 = () => {
    console.log('print 1');
};

// Expression Function
const print2 = function () {
    console.log('print 2');
};

// Decleration Function
function print3() {
    console.log('print 3');
};

print1();
print2();
print3();
