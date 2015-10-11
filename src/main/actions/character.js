import position from '../state/position';

function hasStructure(pos, world) {
  return world[pos.x][pos.y] !== 'grass';
}

function positionExists(pos, world) {
  return (world[pos.x] && world[pos.x][pos.y]);
}

function event(type, position) {
  return {
    type, position
  };
}

function checkMove(oldPos, newPosition, world, validEventType) {
  if (!positionExists(newPosition, world)) {
    return event('HasMovedOutsideTheWorld', oldPos);
  } else if (hasStructure(newPosition, world)) {
    return event('StructureHit', oldPos);
  } else {
    return event(validEventType, newPosition);
  }
}

function moveUp(pos, world) {
  return checkMove(pos, position(pos.x, pos.y - 1), world, 'HasMovedUp');
}

function moveLeft(pos, world) {
  return checkMove(pos, position(pos.x - 1, pos.y), world, 'HasMovedLeft');
}

function moveDown(pos, world) {
  return checkMove(pos, position(pos.x, pos.y + 1), world, 'HasMovedDown');
}

function moveRight(pos, world) {
  return checkMove(pos, position(pos.x + 1, pos.y), world, 'HasMovedRight');
}

export {
  moveUp, moveLeft, moveDown, moveRight
};
