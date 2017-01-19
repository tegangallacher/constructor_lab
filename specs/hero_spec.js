var hero = require('../hero');
var food = require('../food');
var assert = require('assert');

// var hero1 = new hero("Wonderwoman", 50, "chocolate");
// var food1 = new food("cheese", 10, false);
// var food2 = new food("chicken", 10, true);

describe("Hero", function() {
  beforeEach(function() {
    hero1 = new hero("Wonderwoman", 50, "chocolate");
    food1 = new food("cheese", 10, false);
    food2 = new food("chicken", 10, true);

  })
  it('hero has a name', function() {
    assert.equal("Wonderwoman", hero1.name); 
  })
  it('hero has a health level', function() {
    assert.equal(50, hero1.health);
  })
  it('hero has a favourite food', function() {
    assert.equal("chocolate", hero1.favourite_food)
  })
  it('hero can talk', function() {
    assert.equal("Wonderwoman to the rescue!", hero1.talk());
  })
  it("hero can eat", function() {
    hero1.eat(food1);
    assert.equal(60, hero1.health);
  });
  it("hero eats favourite food", function() {
    food3 = new food("chocolate", 10, false);
    hero1.eat(food3);
    assert.equal(65, hero1.health);
  })
  it('hero loses health if food is poisonous', function() {
    hero1.eat(food2);
    assert.equal(40, hero1.health);
  })
})