const repeatString = function(inputString, inputNum) {
    if (inputNum < 0){
        return "ERROR"
    }
    else {
    let repeatedString = inputString.repeat(inputNum);
    return repeatedString;
    }
};

// Do not edit below this line
module.exports = repeatString;
