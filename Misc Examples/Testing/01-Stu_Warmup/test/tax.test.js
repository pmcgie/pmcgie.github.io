var expect = require("chai").expect;
var calculateTax = require("../tax");

// Write tests for the calculateTax function here
describe("tax", function() {
    it("Should mutliply properly when passed numbers", function() {
        expect(calculateTax(1)).to.equal(1.08)
    });
});

it("should throw when not passed numbers", function(){
    expect(function() {
        calculateTax("4");
    }).to.throw(Error);
})
