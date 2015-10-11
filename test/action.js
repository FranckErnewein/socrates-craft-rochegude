import chai from 'chai';
import * as character from '../src/main/actions/character';
import position from '../src/main/state/position';
import world from '../src/main/state/world';
chai.should();


describe('action', () => {
  describe('character', () => {
    describe('#moveUp', () => {
      it('should move up', function() {
        let pos = position(0, 1);
        let event = character.moveUp(pos);
        event.type.should.be.equal('HasMovedUp');
        event.position.y.should.be.equal(0);
      });
      it('should move outside the world', function() {
        let pos = position(0, 0);
        let event = character.moveUp(pos);
        event.type.should.be.equal('HasMovedOutsideTheWorld');
      });
    });
    describe('#moveLeft', () => {
      it('should move left', function() {
        let pos = position(1, 0);
        let event = character.moveLeft(pos);
        event.type.should.be.equal('HasMovedLeft');
        event.position.y.should.be.equal(0);
      });
      it('should move outside the world', function() {
        let pos = position(0, 0);
        let event = character.moveUp(pos);
        event.type.should.be.equal('HasMovedOutsideTheWorld');
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
    });
  });
});
