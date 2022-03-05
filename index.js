// Make a Basic Server
// core module http---->
const http = require('http'); // this is for handle server request and responce in node js
http.createServer( (req, res) => {
    console.log('starting....')
    res.write('<h1> Hi this is TJ </h1>');
    res.end();
}).listen(3000) // for creating server . its take function as a parameter