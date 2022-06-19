const fs = require('fs');
const http = require('http');
const server = http.createServer();

server.on("request",(req,res)=>{

    //case 1
 /*  fs.readFile('text.txt',(err,data)=>{
       if(err) return console.error(err);
       res.end(data.toString());
   })      */
   //case 2

   const rsStream = fs.createReadStream('Ttext.txt');
   rsStream.on('data',(chunckdata)=>{
    res.write(chunckdata);
   })
   rsStream.on('end',()=>{
       res.end();
   })
   rsStream.on('error',()=>{
        res.end('<h1>File not found!!!</h1>')
   })
})

server.listen(3000,'127.0.0.1',()=>{
    console.log('server  is runnng----->');
})