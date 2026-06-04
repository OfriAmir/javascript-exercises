const add = function(a,b) {
	return a + b
};

const subtract = function(a,b) {
	return a - b
};

const sum = function(arr) {
  if (!arr) return 0
	return arr.reduce((total, current) => total + current, 0)
};

const multiply = function(arr) {
  if (!arr) return 0
  return arr.reduce((total, current) => total * current)
};

const power = function(a, b) {
  let product = 1
	for (let i = 0; i < b; i++) product *=a
  return product
};

const factorial = function(a) {
	let product = 1
  for (let i = 0; i < a; i++) product = product*(a-i)
  return product
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
