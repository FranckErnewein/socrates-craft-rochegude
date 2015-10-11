function buildWall(pos, world) {
  if (world[pos.x][pos.y] === 'grass') {
    world[pos.x][pos.y] = 'wall';
    return {
      type: 'WallBuilt',
      world: world
    };
  } else {
    return {
      type: 'BuiltFail'
    };
  }
}

function buildTower(pos, world) {
  if (world[pos.x][pos.y] === 'wall') {
    world[pos.x][pos.y] = 'tower';
    return {
      type: 'TowerBuilt',
      world: world
    };
  } else {
    return {
      type: 'BuiltFail'
    };
  }
}

function destroyTower(pos, world) {
  if (world[pos.x][pos.y] === 'tower') {
    world[pos.x][pos.y] = 'grass';
    return {
      type: 'TowerDestroyed',
      world: world
    };
  } else {
    return {
      type: 'BuiltFail'
    };
  }
}

const nextBuildAction = {
  tower: destroyTower,
  grass: buildWall,
  wall: buildTower
};

function build(pos, world) {
  let currentState = world[pos.x][pos.y];
  let action = nextBuildAction[currentState];
  if (action) {
    return action(pos, world);
  } else {
    return {
      type: 'BuiltFail'
    };
  }
}

export {
  buildWall, buildTower, destroyTower, build
};
