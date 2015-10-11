import chai from 'chai';
import * as character from '../src/main/actions/character';
import * as structure from '../src/main/actions/structure';
import position from '../src/main/state/position';
import world from '../src/main/state/world';

chai.should();
const expect = chai.expect;

describe('action', () => {
  describe('character', () => {
    describe('#moveUp', () => {
      it('should move up', function() {
        let pos = position(0, 1);
        let event = character.moveUp(pos, world(8));
        event.type.should.be.equal('HasMovedUp');
        event.position.y.should.be.equal(0);
      });
      it('should move outside the world', function() {
        let pos = position(0, 0);
        let event = character.moveUp(pos, world(8));
        event.type.should.be.equal('HasMovedOutsideTheWorld');
      });
      it('should hit a structure', function() {
        let builtEvent = structure.buildWall(position(0, 0), world(8));
        let moveEvent = character.moveUp(position(0, 1), builtEvent.world);
        moveEvent.type.should.be.equal('StructureHit');
      });
    });
    describe('#moveLeft', () => {
      it('should move left', function() {
        let pos = position(1, 0);
        let event = character.moveLeft(pos, world(8));
        event.type.should.be.equal('HasMovedLeft');
        event.position.x.should.be.equal(0);
      });
      it('should move outside the world', function() {
        let pos = position(0, 0);
        let event = character.moveLeft(pos, world(8));
        event.type.should.be.equal('HasMovedOutsideTheWorld');
      });
      it('should hit a structure', function() {
        let builtEvent = structure.buildWall(position(0, 0), world(8));
        let moveEvent = character.moveLeft(position(1, 0), builtEvent.world);
        moveEvent.type.should.be.equal('StructureHit');
      });
    });
    describe('#moveDown', () => {
      it('should move down', function() {
        let pos = position(1, 1);
        let grid = world(8);
        let event = character.moveDown(pos, grid);
        event.type.should.be.equal('HasMovedDown');
        event.position.y.should.be.equal(2);
      });
      it('should move outside the world', function() {
        let pos = position(1, 7);
        let grid = world(8);
        let event = character.moveDown(pos, grid);
        event.type.should.be.equal('HasMovedOutsideTheWorld');
      });
      it('should hit a structure', function() {
        let builtEvent = structure.buildWall(position(0, 1), world(8));
        let moveEvent = character.moveDown(position(0, 0), builtEvent.world);
        moveEvent.type.should.be.equal('StructureHit');
      });
    });
    describe('#moveRight', () => {
      it('should move right', function() {
        let pos = position(1, 1);
        let grid = world(8);
        let event = character.moveRight(pos, grid);
        event.type.should.be.equal('HasMovedRight');
        event.position.x.should.be.equal(2);
      });
      it('should move outside the world', function() {
        let pos = position(7, 1);
        let grid = world(8);
        let event = character.moveRight(pos, grid);
        event.type.should.be.equal('HasMovedOutsideTheWorld');
      });
      it('should hit a structure', function() {
        let builtEvent = structure.buildWall(position(1, 0), world(8));
        let moveEvent = character.moveRight(position(0, 0), builtEvent.world);
        moveEvent.type.should.be.equal('StructureHit');
      });
    });
  });
  describe('structure', function() {
    it('should build wall', function() {
      let pos = position(1, 1);
      let grid = world(2);
      let event = structure.buildWall(pos, grid);
      event.type.should.be.equal('WallBuilt');
      event.world[1][1].should.be.equal('wall');
    });

    it('should build tower', function() {
      let pos = position(1, 1);
      let grid = world(2);
      let e1 = structure.buildWall(pos, grid);
      let e2 = structure.buildTower(pos, e1.world);
      e2.type.should.be.equal('TowerBuilt');
      e2.world[1][1].should.be.equal('tower');
    });

    it('should destroy tower', function() {
      let pos = position(1, 1);
      let grid = world(2);
      let e1 = structure.buildWall(pos, grid);
      let e2 = structure.buildTower(pos, e1.world);
      let e3 = structure.destroyTower(pos, e2.world);
      e3.type.should.be.equal('TowerDestroyed');
      expect(e3.world[1][1]).to.be.equal('grass');
    });

    it('should build wall, tower, then destroy it', function() {
      let pos = position(1, 1);
      let grid = world(2);
      let e1 = structure.build(pos, grid);
      e1.type.should.be.equal('WallBuilt');
      expect(e1.world[1][1]).to.be.equal('wall');
      let e2 = structure.build(pos, e1.world);
      e2.type.should.be.equal('TowerBuilt');
      expect(e2.world[1][1]).to.be.equal('tower');
      let e3 = structure.build(pos, e2.world);
      e3.type.should.be.equal('TowerDestroyed');
      expect(e3.world[1][1]).to.be.equal('grass');
    });

  });
});
