const convertToCelsius = function(givenTemp) {
  convertedTemp = (givenTemp - 32)*(5/9);
  const roundedTemp = convertedTemp.toFixed(1);
  console.log (roundedTemp);
  return Number(roundedTemp);
  
};

const convertToFahrenheit = function(givenTemp) {
  convertedTemp = (givenTemp * (9/5) + 32);
  const roundedTemp = convertedTemp.toFixed(1);
  console.log (roundedTemp);
  return Number(roundedTemp);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
