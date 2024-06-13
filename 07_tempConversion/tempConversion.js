const convertToCelsius = function(Fah) {
  return Math.round((Fah - 32) * 5/9 * 10)/10;
};

const convertToFahrenheit = function(Cel) {
  return Math.round(((Cel * 9/5) + 32) * 10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
