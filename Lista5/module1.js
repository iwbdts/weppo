module.exports = a;
var b = require("./module2");

function a(n) {
  if (n > 0) {
    console.log(n);
    return b(n - 1);
  }
}
