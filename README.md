## Hubot Tutorial Skeleton

### Small usage examples of Hubot

#### To run: 

```
npm install
npm run bot
curl localhost:8080/hubot/ZOMG/OMG32
# If you port 8080 is taken
PORT=1337 npm run bot
curl localhost:1337/hubot/ZOMG/OMG32
```

In the Hubot REPL:
```
hubot help
```

#### To run tests

```
npm test
```

#### Examples:

##### Code:

[Bare JS](./scripts/bare.js) - How to respond to a user mention, and how to interact with the Hubot robot brain (redis if available)

[CoffeeScript](./scripts/simple-example.coffee) - How to listen to strings in chat room and how to listen to HTTP calls

##### Tests:

[Bare JS](./tests/test-bar.js) - Test redis brain, and responding to messages

[CoffeeScript](./tests/test-simple-example.coffee) - Test http integration, and hearing messages
