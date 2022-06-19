const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/olympics')
    .then(()=>{
        console.log("Connection Successful to DataBase...");
    })
    .catch((error)=>{
        console.log("No Connection DataBase.");
    });
