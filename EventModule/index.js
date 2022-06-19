const EventEmitter = require('events');
const event =  new EventEmitter();

/*event.on('sayMyname',()=>{
  console.log("your Name is Abdullah");
});
event.on('sayMyname',()=>{
    console.log("your Name is Al");
  });
  event.on('sayMyname',()=>{
    console.log("your Name is Noman");
  });
event.emit("sayMyname"); */

event.on('checkPage',(sc,msg)=>{
 console.log(`${sc} the page is ${msg}`);
});
event.emit("checkPage",200,'OK');