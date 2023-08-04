const add = function(a,b) {
  return a + b;
};

const subtract = function(a,b) {
  return a - b;
};

const sum = function(c) {
	let sum = 0;
  for (let i = 0; i < c.length; i++ ) {
    sum += c[i];
  }
  return sum
};

const multiply = function() {
  let sum = 1;
  for (let j = 0; j < arguments.length; j++ ) {
    sum *= arguments[j];
  }
  return sum
};

const power = function(a,b) {
	return a**b
};

const factorial = function(num) {
  const factorialOf = num => {
    let factorial = 1;
  
    for(let i = 1; i <= num; i++) {
      factorial *= i;
    }
  
    return factorial;
  }
  return factorialOf(num);
  
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
