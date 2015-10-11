export function moveUp(position) {
  if (position.y > 0) {
    return {
      type: 'HasMovedUp',
      position: {
        x: position.x,
        y: position.y - 1
      }
    };
  }else{
    return {
      type: 'HasMovedOutsideTheWorld',
    };
  }
}

export function moveLeft(position) {
  if (position.x > 0) {
    return {
      type: 'HasMovedLeft',
      position: {
        x: position.x - 1,
        y: position.y
      }
    };
  }else{
    return {
      type: 'HasMovedOutsideTheWorld',
    };
  }
}
