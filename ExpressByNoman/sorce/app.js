const path = require('path');
var express = require("express");
var app = express();
const port  =8000;

const staticPath =path.join(__dirname,'../public');
app.use(express.static(staticPath))

// app.get("/", (req,res) => {
//   res.write(`<h1>Hello from Express</h1>`);
//   res.send();
// });

app.listen(port,()=>{
    console.log("server resinnng.....");
})
