const http =  require("http");
const url = require("url");
const server =  http.createServer((req,res)=>{
    if(req.url=='/home'){
        res.end(`<h1>Hello from the other side</h1>`);
    }else if(req.url=='/about'){
        res.end(`<h1>Hello from the other side about</h1>`);
    }else{
        res.writeHead(404,{"Content-type":"text/html"})
        res.end("hello");
    }
})
server.listen(3000,'127.0.0.1',()=>{
    console.log("server is running .....");
})