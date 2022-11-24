const { dir } = require("console");
const fs = require("fs");

// THIS IS HOW WE CAN CREATE A BASIC FILE
fs.writeFileSync("apple.txt", "this is a apple file");

// we take a global module for advanve
// module name : path
const path = require("path");
const dirPath = path.join(__dirname);
console.log(dirPath);

// create files
// for(let i = 0; i < 5; i++){
//     fs.writeFileSync(`${dirPath}/hello${i}.txt`,`simple file using for loop ${i}`)
// }

// read files
// fs.readdir(dirPath, (err, files) => {
//   console.log(files);
//   files.forEach((item, index) => {
//     console.log("file name is ", item);
//   });
// });

// delete files
// for (let i = 0; i < 5; i++) {
//   fs.unlinkSync(`${dirPath}/hello${i}.txt`, `simple file using for loop ${i}`);
// }
