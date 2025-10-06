const fs = require('fs');
// in plain english, this module allows us to work with the file system on our computer
// we can use the fs module to read and write files, create and delete directories, and more

// each function in the fs module has a synchronous and an asynchronous version
// the synchronous version blocks the execution of the code until the operation is complete
// the asynchronous version does not block the execution of the code, and instead takes a callback function that is called when the operation is complete


// Synchronous version
const files = fs.readdirSync('./');

// the './' means the current directory


console.log(files);

// Asynchronous version
fs.readdir('./', function(err, files) { 
    if (err) console.log('Error', err);
    else console.log('Result', files);
});

// in the asynchronous version, the second argument is a callback function that takes two arguments: an error object and the result of the operation
// if there is an error, the error object will be non-null, and we can handle the error accordingly
// if there is no error, the error object will be null, and we can use the result of the operation

// What does the callback function do?
// It is a function that is passed as an argument to another function, and is called when the operation is complete
// In this case, the callback function is called when the readdir operation is complete, and it takes two arguments: an error object and the result of the operation

// Let's use the restaurant analogy again
// Imagine you are at a restaurant and you want to order a meal
// You tell the waiter what you want, and the waiter goes to the kitchen to place your order

// If there is a problem with your order, the waiter will come back and tell you there was an error (the error object)
// If your order is successful, the waiter will come back and bring you your meal (the result of the operation)

