const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('messageLogged', () => {
    console.log('Listener called');
});

emitter.emit('messageLogged');


emitter.on('messageLoggedWithArgs', function(arg) {
    console.log('Listener called with argument:', arg);
});
emitter.emit('messageLoggedWithArgs', { id: 1, url: 'http://'} );

class Logger extends EventEmitter {
    log(message) {
        // Send an HTTP request
        console.log(message);
        
        // Raise an event
        this.emit('messageLogged', { id: 1, url: 'http://'} );
    }

}

const logger = new Logger();


