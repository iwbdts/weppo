var http = require("http");
var express = require("express");
var cookieParser = require("cookie-parser");
var app = express();


app.use(cookieParser());

app.get('/', (req, res) => {
    res.send("Hello");
});

app.get('/set-cookie', (req, res) =>{
    res.cookie('cookie_name', 'cookie_value', { maxAge: 10000 });
    res.send('cookie is set');
})


app.get("/get-cookie", (req, res) => {
    res.send(req.cookies);
});


app.get("/del-cookie", (req, res) => {
    res.clearCookie('cookie_name');
    res.send("DELETE THE COOKIE");
});

// function areCookiesEnabled() {
//   try {
//     document.cookie = "testCookie=1";
//     var cookieEnabled = document.cookie.indexOf("testCookie") !== -1;
//     // Clean up the test cookie
//     document.cookie =
//       "testCookie=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
//     return cookieEnabled;
//   } catch (e) {
//     return false;
//   }
// }


// app.get("/cookies-enabled", (req,res) => {
//     if (navigator.cookieEnabled) {
//       res.send("Cookies are enabled in this browser.");
//     } else {
//       res.send("Cookies are disabled in this browser.");
//     }

// })

http.createServer(app).listen(3000);
console.log("server started");
