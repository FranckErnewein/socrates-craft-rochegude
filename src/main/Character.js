function Character(position) {
  this.position = position;
}

Character.prototype.moveLeft = function moveLeft(world) {
  var newPosition = {
    x: this.position.x - 1,
    y: this.position.y
  };
  return world.checkPosition(newPosition) || 'HasMovedLeft';
};

Character.prototype.moveRight = function moveRight(world) {
  var newPosition = {
    x: this.position.x + 1,
    y: this.position.y
  };
  return world.checkPosition(newPosition) || 'HasMovedRight';
};

module.exports = Character;
