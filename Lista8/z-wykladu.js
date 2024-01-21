var http = require("http");
var express = require("express");

var app = express();
app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.header("Content-disposition", "attachment; filename=plik.txt");
  res.end("123");
});

http.createServer(app).listen(3000);
console.log("started");
