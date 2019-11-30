const EventEmmiter = require('events');

// Create class
class MyEmitter extends EventEmmiter {}

// Init object
const myEmitter = new MyEmitter();

// Event Listener
myEmitter.on('event', () => {
  console.log('Event fired!');
});

// Init event
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');
