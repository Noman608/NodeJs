// get the client
const mysql = require("mysql2");

// create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  database: "mytestdb",
  user: "myuser",
  password: "mypass",
});
// simple query
connection.query(
  `SELECT * FROM person`,
  function (err, results,fields) {
    if(err){
   console.log(err);
    }
    else{
      console.log(results);
    }
    console.log(fields);
    connection.close();
  }
);
