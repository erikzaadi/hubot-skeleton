Helper = require('hubot-test-helper')
chai = require 'chai'
http = require('http')

expect = chai.expect

process.env.EXPRESS_PORT = 8080

helper = new Helper('../scripts/simple-example.coffee')


describe 'simple example script', ->
  describe 'loves coffee', ->
    beforeEach ->
      @room = helper.createRoom()

    afterEach ->
      @room.destroy()

    it 'for realz', ->
      @room.user.say('foo', "Oh darnit, I'd love some coffee").then =>
        expect(@room.messages).to.be.deep.equal [
          ['foo', "Oh darnit, I'd love some coffee"]
          ['hubot', 'yes please']
        ]

  describe 'answers to ZOMG http', ->
    beforeEach ->
      @room = helper.createRoom()

    afterEach ->
      @room.destroy()

    context 'GET /hubot/ZOMG/bla', ->
      beforeEach (done) ->
        http.get('http://localhost:8080/hubot/ZOMG/bla', (@response) => done()
        ).on 'error', done

      it 'responds with status 200 and notifies room', ->
        expect(@response.statusCode).to.equal 200
        expect(@room.messages).to.be.deep.eql [
          ['hubot', 'ZOMG someone sent bla']
        ]
