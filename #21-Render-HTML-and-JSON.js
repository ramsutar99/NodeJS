// Render HTML and JSON

const express = require("express");
const app = express(); // is now executable state

app.get("", (req, res) => {
  res.send(`<h1>Hello World, this is a express js send method, Home page</h1>
            <h3>Welcome to Home page</h3> <a href='http://localhost:4605/help'>Goto help page</a>
            
            <input type='text' placeholder='username'/>
            <button>Click Me</button>
            `);
}); // get is a route

app.get("/help", (req, res) => {
  res.send(
    // sending an array of json data
    [
      {
        name: "Ram",
        lastname: "sutar",
        mobile: 8055363651,
      },

      {
        name: "bala",
        lastname: "sutar",
        mobile: 7040559616,
      },
    ]
  );
});

app.listen(4606); //port 4604
