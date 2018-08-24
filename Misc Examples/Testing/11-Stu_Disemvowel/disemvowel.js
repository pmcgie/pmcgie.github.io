var expect = require("chai").expect;

var disemvowel = function(str) {
  if (typeof str === "number") {
    return String(str);
  }
  return str.replace(/[aeiou]/gi, "");
};

describe("disemvowel", function() {
  it("should remove all vowels", function() {
    expect(disemvowel('fun').to.equal('fn'))
  });

  it("should throw when not removing vowels", function() {
    expect(function() {
      disemvowel(2);
    }).to.throw(Error);
  });
});

module.exports = disemvowel;
