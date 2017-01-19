var Rat = function(type) {
 this.type = type;
}

Rat.prototype = {
  touch: function(food) {
    food.poison = true;
  }
}

module.exports = Rat;