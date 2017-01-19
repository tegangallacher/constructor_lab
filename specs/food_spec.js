var food = require('../food');
var assert = require('assert');

var food1 = new food("cheese", 5, false);

describe("Food", function() {
  it("food has a name", function() {
    assert.equal("cheese", food1.name);
  });
  it('food has a replenishment value', function() {
    assert.equal(5, food1.replenish_value);
  });
});