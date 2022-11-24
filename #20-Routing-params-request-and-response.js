// app.get("", (req, res) => {
//   res.send("<h1>Hello World, this is a express js send method, Home page</h1>");
// }); // get is a route

// app.listen(4602);

// In above code we used req and res as a parameter of get method , here we getting more about req, res

// 1) Request parameter in get method
// => the browser go to the url and tries to access the server code which at line 6
//  this process is taken as a request by the node js or express js

// getting data sent by browser

// creating web page

const express = require("express");
const app = express(); // is now executable state

app.get("", (req, res) => {
  console.log("data sent by the browser", req.query);
  res.send(
    "<h1>Hello World, this is a express js send method inside get callback function as a response, Home page</h1>"
  );
}); // get is a route

app.listen(4603);
