require('chai').should();
var Character = require('../src/main/Character');
var World = require('../src/main/World');

describe('Character', function() {

  it('should create a new character', function() {
    var character = new Character();
    character.should.be.an.instanceof(Character);
  });

  it('should emit has moved left event when move on left', function() {
    var world = new World();
    var character = new Character({
      x: 3,
      y: 3
    });
    var event = character.moveLeft(world);
    event.should.be.equal('HasMovedLeft');
  });

  it('should emit has moved outside the world when move on left on the border', function() {
    var position = {
      x: 0,
      y: 3
    };
    var character = new Character(position);
    var world = new World();

    var event = character.moveLeft(world);

    event.should.be.equal('HasMovedOutsideTheWorld');
  });

  it('should emit has moved outside the world when move on right on the border', function() {
    var position = {
      x: 7,
      y: 0
    };
    var character = new Character(position);
    var world = new World();

    var event = character.moveRight(world);

    event.should.be.equal('HasMovedOutsideTheWorld');
  });

  //TODO: 
  //test move left (HitBuilding),
  //test move right (HasMovedRight, HitBuilding),
  //test move up (HasMoveUp, OutsideTheWorld, HitBuilding),
  //test move down (HasMoveDown, OutsideTheWorld, HitBuilding),
  //
  //test build wall
  //test build tower
  //test destroy tower



});
