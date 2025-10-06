/*
in this example, we are importing a local module called logger using require. 
The require function takes a path to the module as an argument and returns the exports object of that module.
The only thing we are exporting from the logger module is the log function, and we can call it using logger.log().
The logger constant is set to the exports object of the logger.js module, which contains the log function
*/


const logger = require('./logger'); // './' means local file

logger.log('message');


