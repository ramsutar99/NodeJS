// CRUD wih File System
// 1) Make File
// 2) Read File
// 3) Update File
// 4) Rename File
// 5) Delete File

//getting path and file system module
const path = require("path");
const fs = require("fs");
const dirPath = path.join(__dirname, "crud");
const filepath = `${dirPath}/apple.txt`;

// 1) Make file / creating file
// fs.writeFileSync(filepath, "this is a text file made simple operation");

// 2) Read file ===============
// fs.readFile(filepath, "utf8", (err, item) => {
//   console.log(item);
// });

// 3) Update file / append file ==============
// fs.appendFile(filepath, "and file name is apple.txt", (err) => {
//   if (!err) {
//     console.log("file is updated");
//   }
// });

// 4) Rename file name ===================
// fs.rename(filepath, `${dirPath}/fruit.txt`, (err) => {
//   if (!err) {
//     console.log("file is updated");
//   }
// });

// 5) Delete file =====================
// fs.unlinkSync(`${dirPath}/fruit.txt`);
