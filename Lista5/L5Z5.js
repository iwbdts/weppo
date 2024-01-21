var http = require("https");

function promisedGet(url) {
  return new Promise(function (resolve, reject) {
    var client = http.get(url, function (res) {
      var buffer = "";
      res
        .on("data", function (data) {
          buffer += data.toString();
        })
        .on("end", function () {
          resolve(buffer);
        });
    });
  });
}

(async function () {
  var result = await promisedGet("https://skos.ii.uni.wroc.pl/");
  console.log(result);
})();
