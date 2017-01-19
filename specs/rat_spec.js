var rat = require('../rat');
var food = require('../food');
var assert = require('assert');

var rat1 = new rat("sneaky");
var food3 = new food("cheese", 5, false);

describe("Rat", function() {
  it('rat has a type', function() {
    assert.equal('sneaky', rat1.type)
  })
  it('rat can touch food and change to poisonous', function() {
    rat1.touch(food3);
    assert.equal(true, food3.poison);
  })
})