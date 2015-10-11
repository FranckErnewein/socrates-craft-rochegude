import position from '../state/position';

export function moveUp(pos) {
  if (pos.y > 0) {
    return {
      type: 'HasMovedUp',
      position: position(pos.x, pos.y - 1)
    };
  } else {
    return {
      type: 'HasMovedOutsideTheWorld',
    };
  }
}

export function moveLeft(pos) {
  if (pos.x > 0) {
    return {
      type: 'HasMovedLeft',
      position: position(pos.x - 1, pos.y)
    };
  } else {
    return {
      type: 'HasMovedOutsideTheWorld',
    };
  }
}

export
function moveDown(pos, world) {
  let newPosition = position(pos.x, pos.y + 1);
  if (newPosition.y < world[newPosition.x].length) {
    return {
      type: 'HasMovedDown',
      position: newPosition
    };
  } else {
    return {
      type: 'HasMovedOutsideTheWorld'
    };
  }
}

export function moveRight(pos, world) {
  let newPosition = position(pos.x + 1, pos.y);
  if (newPosition.x < world.length) {
    return {
      type: 'HasMovedRight',
      position: newPosition
    };
  } else {
    return {
      type: 'HasMovedOutsideTheWorld'
    };
  }
}
