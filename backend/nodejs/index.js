// https://nodejs.org/docs/latest-v18.x/api/
// https://nodejs.org/docs/latest-v18.x/api/fs.html#fswritefilefile-data-options-callback
//nodeJS is a runtime environment for executing JavaScript code outside of a browser. 
//It is a platform built on Chrome's JavaScript runtime for easily building fast and scalable network applications.
//Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.
//Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.
//Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser.
//Consequently, Node.js represents a "JavaScript everywhere" paradigm,[6] unifying web-application development around a single programming language, rather than different languages for server- and client-side scripts.
//Though .js is the standard filename extension for JavaScript code, the name "Node.js" does not refer to a particular file in this context and is merely the name of the product.
/* 
node

.help

.exit

5+8

let a = 3

a + 2

node index.js
*/
const fs = require('fs');
// fs.writeFile('test.txt', 'Hello World!', function (err) {
//     if (err) throw err;
//     console.log('File is created successfully.');
// });


fs.readFile('./test.txt', "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
});