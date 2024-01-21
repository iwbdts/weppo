var fs = require("fs");

fs.promises.readFile("zad4.txt", "utf-8").then((data) => {
  console.log("data1: " + data);
});

fs.readFile("zad4.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("ERROR: " + err);
  } else {
    console.log("DATA2: " + data);
  }
});

function fspromise(path, enc) {
  return new Promise((res, rej) => {
    fs.readFile(path, enc, (err, data) => {
      if (err) rej(err);
      res(data);
    });
  });
}

fspromise("zad4.txt", "utf-8")
  .then((data) => {
    console.log(`data3: ${data}`);
  })
  .catch((err) => {
    console.log(`err: ${err}`);
  });
