const express = require("express");
require("../src/db/connection");
const MenRanking = require("../src/models/mens");
const router = require("../src/routers/men");
const app = express();
const port = process.env.PORT || 3000;


app.use(express.json());
app.use(router);
app.listen(port, () => {
    console.log(`Connection Activated on port ${port}...`);
});