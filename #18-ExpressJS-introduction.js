// What is Express JS
// install Express
// make example
// interview question

// What is express JS ?
// => Node js web Application framework.

const express = require("express");
const app = express(); // is now executable state

// creating web page

app.get("", (req, res) => {
  res.send("<h1>Hello World, this is a express js send method, Home page</h1>");
}); // get is a route

app.get("/about", (req, res) => {
  res.send("<h1>THis is a about us page using express</h1>");
}); // get is a route

app.get("/help", (req, res) => {
  res.send("<h1>THis is a help up page using express</h1>");
}); // get is a route

app.listen(4602);

