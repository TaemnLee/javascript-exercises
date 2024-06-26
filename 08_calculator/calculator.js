const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((acc, ini) => acc + ini, 0);
};

const multiply = function(arr) {
  return arr.reduce((acc, ini) => acc * ini, 1);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
  if (a === 0) return 1;
  let acc = 1;
	for (let i = a; i > 0; i--){
    acc = acc * i;
  }
  return acc;
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
