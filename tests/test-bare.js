var Helper = require('hubot-test-helper');
var chai = require('chai');

var expect = chai.expect;

helper = new Helper('../scripts/bare.js');

describe('simple example script', function(){
  var room = null;
  beforeEach(function(){
    room = helper.createRoom();
  });

  afterEach(function(){
    room.destroy();
  })

  describe('store', function(){

    it('stores key val', function(){
      return room.user.say('bar', "@hubot store bla ZOMG").then(function(){
        var expected = [
          ['bar', "@hubot store bla ZOMG"],
          ['hubot', '@bar Done!']
        ];
        expect(room.messages).to.be.deep.equal(expected);
      });
    });

    it('notifies for missing key', function(){
      return room.user.say('bar', "@hubot get bla").then(function(){
        var expected = [
          ['bar', "@hubot get bla"],
          ['hubot', "@bar 'bla' Not set"]
        ];
        expect(room.messages).to.be.deep.equal(expected);
      });
    });

    it('get val for key', function(){
      room.robot.brain.set('bla', 123);
      return room.user.say('bar', "@hubot get bla").then(function(){
        var expected = [
          ['bar', "@hubot get bla"],
          ['hubot', "@bar 123"]
        ];
        expect(room.messages).to.be.deep.equal(expected);
      });
    });
  });

  describe('WAT', function(){
    it("Get's the lovin", function(){
      return room.user.say('foo', "@hubot WAT").then(function(){
        var expected = [
          ['foo', "@hubot WAT"],
          ['hubot', '@foo ZOMG ZOMG ZOMG']
        ];
        expect(room.messages).to.be.deep.equal(expected);
      });
    });
  });
});
