const path = require('path');

// Basename of the file
console.log(path.basename(__filename));

// Directory name
console.log(path.dirname(__filename));

// extension of a file
console.log(path.extname(__filename));

// path object
console.log(path.parse(__filename));

// concatenate paths
console.log(path.join(__dirname, 'test', 'hello.html'))