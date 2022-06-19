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
  `INSERT INTO person(id,name,age,city) values (1,'Abdullah',25,'Khulna')`,
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
