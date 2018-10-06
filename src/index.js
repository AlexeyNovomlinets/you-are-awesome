const createEnumerableProperty = (propertyName) => {
    const objectKeysClone = Object.keys.bind({});
    Object.keys = (object) =>
        objectKeysClone(object).filter(key => key === propertyName);
    return propertyName;
};
const createNotEnumerableProperty = (propertyName) => {
    const objectKeysClone = Object.keys.bind({});
    Object.keys = (object) =>
        objectKeysClone(object).filter(key => key !== propertyName);
    return propertyName;
};
const createProtoMagicObject = () => {
    const result = () => {};
    result.prototype = result.__proto__;
    return result;
};
const incrementor = () => {   
    if(global.count === undefined) {global.count = 0;}
    global.count++;

    const inc = () => {
        global.count++;
        return inc;
    }

    inc.valueOf = () => {return global.count;}

    return inc;
};
const asyncIncrementor = () => {
    if(global.asyncCount === undefined) {global.asyncCount = 0;}
    global.asyncCount++;

    const asyncInc = () => {
        global.asyncCount++;
        return inc;
    }

    asyncInc.valueOf = () => {return global.asyncCount;}

    return asyncInc;
};
const createIncrementer = () => {
    let count = 0,
        arr = [];
    while (count !== 6) {arr[count] = ++count;}
    return arr[Symbol.iterator]();
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = () => {};
const getDeepPropertiesCount = (object) => {
    const getDeepCount = (object) => {
        let keys = [];
        for(let key in object) {
            keys.push(key);
            if(typeof object[key] === "object") {
                let subkeys = getDeepCount(object[key]);
                keys = keys.concat(subkeys.map(function(subkey) {
                    return key + "." + subkey;
                }));
            }
        }
        return keys;
    };

    return getDeepCount(object).length;
};
const createSerializedObject = () => {
    return new String();
};
const toBuffer = () => {};
const sortByProto = () => {};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;