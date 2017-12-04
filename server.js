var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var mysql      = require('mysql');
var connection = mysql.createConnection({

    host: "xq7t6tasopo9xxbs.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
  
    // Your username
    user: "qclifbjefe47cqvv",
  
    // Your password
    password: "dx43xlvi4o8yyuau",
    database: "bsud9ij21mlz20o2"
  });

  connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
   hi();
   
  });
  function hi(){
  var query = connection.query("SELECT * FROM table_list", function(err, res) {
console.log(res)
  })
}
var app = express();
var PORT = process.env.PORT || 3000;

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });
  
  app.get("/view", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
  });
  
  app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
  });

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

