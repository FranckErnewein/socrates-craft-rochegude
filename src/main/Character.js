export default class Character {

  constructor(position) {
    this.position = position;
  }

  moveLeft(world) {
    let newPosition = {
      x: this.position.x - 1,
      y: this.position.y
    };
    return world.checkPosition(newPosition) || 'HasMovedLeft';
  }

  moveRight(world) {
    let newPosition = {
      x: this.position.x + 1,
      y: this.position.y
    };
    return world.checkPosition(newPosition) || 'HasMovedRight';
  }
}

module.exports = Character;
