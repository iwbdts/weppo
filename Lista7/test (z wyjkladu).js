var http = require("http");
var fs = require("fs");

(async function () {
  var page = await fs.promises.readFile("test.html");
  http
    .createServer((req, res) => {
      res.setHeader("Content-type", "text/html; charset=utf-8");
      res.end(page);
    })
    .listen(3000);

  console.log("started");
})();
