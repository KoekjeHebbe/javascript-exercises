const removeFromArray = function(inputArray, toRemove) {
    let removeArray = [arguments[1],arguments[2],arguments[3],arguments[4]];
    let newArray = inputArray.filter((value) => {
        return !removeArray.includes(value)
    })
    return newArray
    console.log(newArray)
};

// Do not edit below this line
module.exports = removeFromArray;
