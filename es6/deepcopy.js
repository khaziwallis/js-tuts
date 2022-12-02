// ES5 way
const deepCopyFunction = (inObject) => {
    let outObject, value, key;
    if (typeof inObject !== "object" || inObject === null) {
      return inObject; // Return the value if inObject is not an object
    }
    // Create an array or object to hold the values
    outObject = Array.isArray(inObject) ? [] : {};
    for (key in inObject) {
      value = inObject[key];
      // Recursively (deep) copy for nested objects, including arrays
      outObject[key] = deepCopyFunction(value);
    }
    return outObject;
};
// ES6 way
const deepClone = obj => {
    let clone = Object.assign({}, obj);
    Object.keys(clone).forEach(
      key => (clone[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key])
    );
    return clone;
    //return Array.isArray(obj) ? (clone.length = obj.length) && clone : clone;
};

let data = {
    name: 'Ram',
    age: 20,
    id: '123456a',
    education: [{
        name: 'DVS',
        type: 'school'
    }, {
        name: 'DSIT',
        type: 'diploma'
    }, {
        name: 'JNNCE',
        type: 'graducation'
    }]
};

let otherData = [{
    name: 'Ram',
    age: 20,
    id: '123456a',
    education: [{
        name: 'DVS',
        type: 'school'
    }, {
        name: 'DSIT',
        type: 'diploma'
    }, {
        name: 'JNNCE',
        type: 'graducation'
    }]
}, {
    name: 'Shyam',
    age: 30,
    id: '123456b',
    education: [{
        name: 'DVSz',
        type: 'schoolz'
    }, {
        name: 'DSITz',
        type: 'diplomaz'
    }, {
        name: 'JNNCEz',
        type: 'graducationz'
    }]
}];
let copyData = deepClone(data);//deepCopyFunction(data);
copyData.education[0].name = 'National';
console.log(data.education[0].name);
console.log(copyData.education[0].name);

let copyOtherData = deepClone(otherData);
copyOtherData[0].name = 'Dude';
console.log(copyOtherData[0].name);
console.log(otherData[0].name);

copyOtherData[0].education[0].name = 'new DVS';
console.log(copyOtherData[0].education[0].name);
console.log(otherData[0].education[0].name);
