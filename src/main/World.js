export default class World {
  constructor(size) {
    this.size = size || 8;
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
