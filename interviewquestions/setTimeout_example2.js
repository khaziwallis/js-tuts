/**
 * 0 1 2 3 4 5
*/
for(var i =0; i<= 5; i++) {
    console.log(i);
};

/**
 * ISSUE
 * 6 6 6 6 6 6
*/
for(var i =0; i<= 5; i++) {
    setTimeout(() => console.log(i));
};

/**
 * 0 1 2 3 4 5
*/
for(let i =0; i<= 5; i++) {
    setTimeout(() => console.log(i));
};

/**
 * 0 1 2 3 4 5
*/
for(var i =0; i<= 5; i++) {
    setTimeout(() => () => console.log(i));
};
/**
 * 0 1 2 3 4 5
*/
for (var i = 0; i <= 5; i++) {
    const print = (j) => {
        console.log(j);
    };
    setTimeout(print.bind(null, i));
}

