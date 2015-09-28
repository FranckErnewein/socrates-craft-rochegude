export default class Character {
  constructor(position) {
    this.position = position;
  }

  moveLeft(world) {
    var newPosition = {
      x: this.position.x - 1,
      y: this.position.y
    };
    return world.checkPosition(newPosition) || 'HasMovedLeft';
  }
  moveRight(world) {
    var newPosition = {
      x: this.position.x + 1,
      y: this.position.y
    };
    return world.checkPosition(newPosition) || 'HasMovedRight';
  }
}

module.exports = Character;
