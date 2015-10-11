import chai from 'chai';
import * as character from '../src/main/actions/character';
import position from '../src/main/position';
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
  });
});
