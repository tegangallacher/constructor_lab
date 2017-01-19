var Hero = function(name, health, favourite_food) {
  this.name = name;
  this.health = health;
  this.favourite_food = favourite_food;
};

Hero.prototype = {
  talk: function() {
    return (this.name + " to the rescue!");
  },
  eat: function(food) {
    switch(food.posion) {
      case true:
      (this.health -= food.replenish_value);
      break; 
      case false:
        if (this.favourite_food === food.name) {
          return (this.health += (food.replenish_value*1.5));
        } else {
          return (this.health += food.replenish_value);
        } 
      break;
    }
  }
};

module.exports = Hero;
