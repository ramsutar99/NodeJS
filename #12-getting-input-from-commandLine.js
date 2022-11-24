// getting data from command line -
// module name : process
console.log(process.argv[3]); //argv = argument value

// to create a new local file required module -
//  module name : fs / fileSystem

const fs = require("fs");

const input = process.argv;

console.log(input[2]);
if (input[2] == "add") {
  //if from command line input received as add then following code is been executed
  fs.writeFileSync(input[3], input[4]);
} else if (input[2] == "remove") {
  // if we reveived command line input as remove then it will execute following code
  fs.unlinkSync(input[3]);
} else {
  // if no argument is received this code will be executed
  console.log("Invalid Output");
}

// here I have learned that how to create a file by taking input from command line

