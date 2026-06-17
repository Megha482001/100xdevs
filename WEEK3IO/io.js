const fs = require("fs"); // import node.js file system module to read/write files
const contents = fs.readFileSync("a.txt", "utf-8"); // read text from a.txt Synchronously and storing it in contents. utf-8 : text encoding format tells javascript how to read characters
console.log(contents);//print contents