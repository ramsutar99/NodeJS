// What is tamplate engine ?
// install ejs tamplate package.
//  Setup dynamic routing
//  Make dynamic Page
// interview question

// What is tamplate engine :
// =>

const express = require("express");
const path = require("path");

const app = express(); //now express js is in executable state
const publicPath = path.join(__dirname, "views");

// app.use(express.static(publicPath))
app.set("view engine", "ejs");

app.get("/profile", (req, res) => {
  res.render("profile");
});

app.listen(4700);
