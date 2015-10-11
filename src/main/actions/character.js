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
