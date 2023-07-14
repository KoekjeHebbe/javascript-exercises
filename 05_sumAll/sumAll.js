const sumAll = function(startNum,endNum) {
   if (startNum>0 && endNum>0 && (typeof endNum === "number") && (typeof startNum === "number")){ 
    if (startNum<endNum){
    sum = (endNum * (endNum + startNum))/2
    console.log(sum);
    return (sum);
    }
    else if (startNum>endNum){
    sum = (startNum * (endNum + startNum))/2
    console.log(sum);
    return (sum);
    }
    else{
        return "ERROR";
    }
    }
    else {
        return "ERROR";
    }
//  const sum = newArray.reduce((a, b) => a + b, 0);
//  console.log(sum);

};

// Do not edit below this line
module.exports = sumAll;
