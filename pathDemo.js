const path = require('node:path');

// The node:path module provides utilities for working with file and directory paths.

pathObject = path.parse(__filename);

console.log(pathObject);