var Villain = function(name, health) {
  this.name = name;
  this.health = health;
};

Villain.prototype = {
  talk: function() {
      return ("why so serious?");
    },
  attack: function(hero) {
    if (this.health >= hero.health) {
      return (hero.health -= 5);
    } else {
      return (this.health -= 5);
    } 
  }

};


module.exports = Villain;