const fs = require('fs');
const http =  require('http');
const server =  http.createServer();
server.on('request',(req,res)=>{

    const rsStream = fs.createReadStream('text.txt');
    rsStream.pipe(res);

});
server.listen(8000,'127.0.0.1',()=>{
    console.log("Server is running.....");
})

