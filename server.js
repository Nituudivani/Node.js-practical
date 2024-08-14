const http = require('http');

const myServer = http.createServer((req, res) => {
    console.log(req);
    res.end("Hello from Serve Again")
});

myServer.listen(8000, ()=> console.log("server started"))