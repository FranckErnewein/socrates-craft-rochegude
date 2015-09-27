import chai from 'chai';
chai.should();
import Character from '../src/main/Character';
import World from '../src/main/World';

describe('Character', () => {

  it('should create a new character', () => {
    let character = new Character();
    character.should.be.an.instanceof(Character);
  });

  it('should emit has moved left event when move on left', () => {
    let world = new World();
    let character = new Character({
      x: 3,
      y: 3
    });
    let event = character.moveLeft(world);
    event.should.be.equal('HasMovedLeft');
  });

  it('should emit has moved outside the world when move on left on the border', () => {
    let position = {
      x: 0,
      y: 3
    };
    let character = new Character(position);
    let world = new World();

    let event = character.moveLeft(world);

    event.should.be.equal('HasMovedOutsideTheWorld');
  });

  it('should emit has moved outside the world when move on right on the border', () => {
    let position = {
      x: 7,
      y: 0
    };
    let character = new Character(position);
    let world = new World();

    let event = character.moveRight(world);

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
