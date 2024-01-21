module.exports = b;
var a = require("./module1");
function b(n) {
  if (n > 0) {
    console.log(n);
    return a(n - 1);
  }
}
