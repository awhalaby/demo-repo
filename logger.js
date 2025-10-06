/*
in this module, we define a log function and make it available to other modules
by attaching it to the exports object. The log function takes a message and writes it in the console.
We use module.exports as a storer for this function
*/

var url = 'http://mylogger.io/log';

function log(message) {
    // Send an HTTP request
    console.log(message);
}

module.exports.log = log; // adds the log function to the exports object of this module