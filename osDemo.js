const os = require('os');
// The os module provides operating system-related utility methods and properties.


var totalMemory = os.totalmem();
var freeMemory = os.freemem(); 

//console.log('Total Memory:' + totalMemory)
//console.log('Free Memory:' + freeMemory)

// Template String
console.log(`Total Memory: ${totalMemory}`) 
console.log(`Free Memory: ${freeMemory}`);

// We use backticks ` for template strings, which allow embedding expressions inside string literals.
// dynamic values can be included using ${expression} syntax.

/*
ok, why is it cool that we can show our total and free memory in this way?
Because before node, JS code was only run in the browser, and it didn't have access to the OS level information like this.
    Now with node, we can write JS code that can interact with the OS. We call this server-side JS.

Is my computer a server in this context? Yes, it is. A server is any computer that provides services to other computers over a network.
Your computer can be a server when you run a web server on it, for example.

If someone runs this code on their computer, they will see their own total and free memory, not mine.

Why might this be useful for users?
    - Monitoring system resources
    - Building system utilities
    - Creating cross-platform applications
*/