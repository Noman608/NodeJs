const  http = require("http");
const url = require('url');
const fs =  require('fs');
const server = http.createServer((req,res)=>{
   const data =  fs.readFileSync('./userapi.json',"utf-8")
   const objdata = JSON.parse(data);
     if(req.url=="/api"){
        res.writeHead(200,{"Contant-type" : "applocation/json"});
        res.end(objdata[0].name);
     }
})

server.listen(3000,'127.0.0.1',()=>{
   console.log("server is running on .... 3000");
})