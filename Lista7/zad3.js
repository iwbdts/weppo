var http = require("http");
var express = require("express");

var app = express();
app.set("view engine", "ejs");
app.set("views", "./views");

// w tym parsowane są POSTy
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index", { imie: "", nazwisko: "", przedmiot: "" });
});

app.post("/", (req, res) => {
  const imie = req.body.imie || "";
  const nazwisko = req.body.nazwisko || "";
  const przedmiot = req.body.przedmiot || "";

  const zadania = {};
  for (let i = 1; i <= 10; i++) {
    const zadanieKey = `zadanie${i}`;
    zadania[zadanieKey] = req.body[zadanieKey] || 0;
  }

  if (imie && nazwisko && przedmiot) {
    res.redirect(
      `/print?imie=${imie}&nazwisko=${nazwisko}&przedmiot=${przedmiot}&${new URLSearchParams(
        zadania
      ).toString()}`
    );
  } else {
    res.render("index", {
      imie: "",
      nazwisko: "",
      przedmiot: "",
      message: "Należy podać imię, nazwisko, przedmiot",
    });
  }
});
app.get("/print", (req, res) => {
  const imie = req.query.imie || "";
  const nazwisko = req.query.nazwisko || "";
  const przedmiot = req.query.przedmiot || "";

  const zadania = {};
  for (let i = 1; i <= 10; i++) {
    const zadanieKey = `zadanie${i}`;
    zadania[zadanieKey] = req.query[zadanieKey] || 0;
  }

  res.render("print", { imie, nazwisko, przedmiot, zadania });
});

http.createServer(app).listen(3000);
console.log("started");
