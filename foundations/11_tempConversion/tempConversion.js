const convertToCelsius = function(tempF) {
  const tempC = (tempF - 32) / 1.8
  return +tempC.toFixed(1)
};

const convertToFahrenheit = function(tempC) {
  const tempF = 1.8 * tempC + 32
  return +tempF.toFixed(1)
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
