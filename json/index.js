const fs  = require('fs');
const bioData = {
    name: "Noman",
    age:25,
    gender: 'M'
}
const jsonData = JSON.stringify(bioData);
fs.writeFile('json1.json',jsonData,(err)=>{
    console.log("json1.json File Created!");
})
fs.readFile("json1.json","utf-8",(err,data)=>{
    console.log((data));
    console.log(JSON.parse(data));
})