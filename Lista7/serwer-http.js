var http = require("http");

http
  .createServer((req, res) => {
    // req.write();
    res.setHeader("Content-type", "text/html; charset=utf-8");
    res.end(`hello world ${req.url}, it's ${new Date()}`);
  })
  .listen(3000);

console.log("started");
