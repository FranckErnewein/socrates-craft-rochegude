function World() {
  this.size = 8;
}

World.prototype.moveLeft = function moveLeft() {
  return 'HasMovedLeft';
};

World.prototype.checkPosition = function checkPostion(position){
  if(position.x < 0 || position.x >= this.size){
    return 'HasMovedOutsideTheWorld';
  }
};

module.exports = World;
