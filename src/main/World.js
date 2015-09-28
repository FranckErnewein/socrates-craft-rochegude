export default class World {
  constructor() {
    this.size = 8;
  }

  moveLeft() {
    return 'HasMovedLeft';
  }

  checkPosition(position) {
    if (position.x < 0 || position.x >= this.size) {
      return 'HasMovedOutsideTheWorld';
    }
  }
}

module.exports = World;
