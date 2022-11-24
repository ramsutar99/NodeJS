const express = require("express");
const path = require("path");

const app = express(); //now express js is in executable state
const publicPath = path.join(__dirname, "files");
// console.log(__dirname, publicPath, '==================');

app.use(express.static(publicPath)); //use method use 


app.listen(4613);
