Array.prototype.myFilter = function (callback, context) {
    if (typeof callback !== 'function') {
        throw new Error('callback must be a function');
    }
    const arr = [];
    for(let i = 0, len = this.length; i < len; i++) {
        if (callback.call(context, this[i], i, this)) {
            arr.push(this[i]);
        }
    }
    return arr;
};

const result = [10,20,30, 25].myFilter((val) => val > 20 );
console.log(result);