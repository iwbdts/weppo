//źle?
const http = require("http");
const fs = require("fs");

const filename = "file.txt";

http
  .createServer((req, res) => {
    // Create a readable stream with dynamic data (e.g., read from a file)
    const stream = fs.createReadStream(filename, "utf-8");

    // Set headers for file download
    res.setHeader("Content-Disposition", "attachment; filename=" + filename);
    res.setHeader("Content-type", "text/plain");

    // Pipe the stream to the response
    stream.pipe(res);
  })
  .listen(3000);

console.log("Server started!");
