const express = require("express");
const fs = require("fs");

const app = express();
const port = 3000;

// Handle requests to the root URL
app.get("/", (req, res) => {
  res.send("Hello, this is the root!");
});

app.get("/download", (req, res) => {
  // Set Content-Disposition header to force download
  res.setHeader("Content-disposition", "attachment; filename=example.txt");

  // Open the file you want to send
  const fileStream = fs.createReadStream("example.txt");

  // Pipe the file stream to the response
  fileStream.pipe(res);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
