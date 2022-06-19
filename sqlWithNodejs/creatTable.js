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
  `CREATE TABLE IF NOT EXISTS person(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(50),
      age INTEGER NOT NULL,
      city VARCHAR(30)
    )`,
  function (err, results) {
    if(err){
   console.log(err);
    }
    else{
      console.log("Table created successfully....");
    }
    connection.close();
  }
);
