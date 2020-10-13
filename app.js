var express = require("express");
var bodyparser = require("body-parser");
var app = express();
app.use(
  bodyparser.urlencoded({
    extended: true,
  })
);
var mysql = require("mysql");
var dbconfig = require("./config/dbconfig");
var port = 8080;
var router = require("./router/main")(app);

app.set("views", __dirname + "/views");
app.use("/static", express.static("static"));
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);
app.use(express.static("static"));

app.listen(port, function () {
  console.log("Server Start, Port : " + port);
});
