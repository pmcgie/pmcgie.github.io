var calculateTax = function(price) {
  // Fill in code here


};

module.exports = calculateTax;


// Replace with code below to speed things up! 
// Point of the exercise is to use mocha + chai in test/tax.test.js!

var calculateTax = function(price) {
  if (typeof price !== "number") {
    throw new Error("Parameter 'price' is required and must be a number.");
  }

  return Number((price * 1.08).toFixed(2));
};

module.exports = calculateTax;

