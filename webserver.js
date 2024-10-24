// step 1: importing server library like http
const http1 = require('http');
// step 2: creating a server
const webserver = http1.createServer((req,res)=>{
    res.end("Hello chennai"); //response to the client
});

// step 3: assign the port number for the server
const port = 3500; 
// can be any number(port)
// step 4 : listening the server
webserver.listen(port,()=>{
    console.log("current server running in http://localhost:3500");
});

