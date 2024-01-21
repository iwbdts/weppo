var http = require("http");
var express = require("express");
var multer = require("multer");
var upload = multer({ dest: "uploads/" });

var app = express();
app.set("view engine", "ejs");
app.set("views", "./views-z1");

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/upload", upload.single("file"), (req, res) => {
  res.send("Uploaded succesfully!");
});

http.createServer(app).listen(3000);
console.log("started");
