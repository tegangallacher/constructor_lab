var villain = require('../villain');
var hero = require('../hero')
var assert = require('assert');

describe("Villain", function() {
  beforeEach(function() {
    villain1 = new villain("The Joker", 40);
    hero1 = new hero("Batman", 50, "cheese");
  });
  it('villain has a name', function() {
    assert.equal("The Joker", villain1.name);
  });
  it('villain has a health level', function() {
    assert.equal(40, villain1.health);
  });
  it('villain can talk', function() {
    assert.equal("why so serious?", villain1.talk())
  });
  it('villain attacks hero and loses', function() {
    villain1.attack(hero1);
    assert.equal(35, villain1.health);
  });
  it('villain attacks hero and wins', function() {
    villain1.health = 60;
    villain1.attack(hero1);
    assert.equal(45, hero1.health);
  });
});