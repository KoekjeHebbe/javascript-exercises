const leapYears = function(theYear) {
    if ((theYear % 4 === 0) || ((theYear % 400 === 0) && (theYear % 100 !== 0))){
       if (theYear % 100 === 0){
        if (theYear % 400 === 0){
            return true
        }
        else {
            return false
        }
       }
       else {
        return true
       }
    }
    else{
        return false
    }
};

// Do not edit below this line
module.exports = leapYears;
