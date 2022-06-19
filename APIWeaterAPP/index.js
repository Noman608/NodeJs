const http = require("http");
const fs = require("fs");
var requests = require("requests");
const homefile = fs.readFileSync("home.html", "utf-8");

const replaceVal = (tempVal,orgVal)=>{
   let temperature = tempVal.replace("{%tempVal%}",orgVal.main.temp);
   temperature = temtemperature.replace("{%tempMinVal%}",orgVal.main.temp_min);
   temperature = temtemperature.replace("{%tempMaxVal%}",orgVal.main.temp_max);
   temperature = temtemperature.replace("{%location%}",orgVal.name);
   temperature = temtemperature.replace("{%country%}",orgVal.sys.country);
   return temperature;
}

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    requests(
      "https://api.openweathermap.org/data/2.5/weather?q=odisha&appid=ff147918f0a023a693587f9bd907d4fb"
    )
      .on("data", (chunk) => {
        const objdata = JSON.parse(chunk);
        const arrData = [objdata];
        // console.log(arrData[0].main.temp);
        const realTimeData = arrData
          .map((val) => replaceVal(homeFile, val))
          .join("");
        res.write(realTimeData);
        // console.log(realTimeData);
      })
      .on("end", (err) => {
        if (err) return console.log("connection closed due to errors", err);
        res.end();
      });
  } else {
    res.end("File not found");
  }
});

server.listen(8000, "127.0.0.1");

