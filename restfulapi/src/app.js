const express = require('express');
require('./db/connection.js')

const app = express();
const studentRouter =  require("./routers/students");
const port = process.env.PORT || 8000;

app.use(express.json());

app.use(studentRouter);


app.listen(port, () => {
    console.log(`Conection is set up on ${port}`);
});