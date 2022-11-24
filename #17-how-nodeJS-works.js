// How node JS works

// 1) Call Stack
// 2) Node API
// 3) CallBack Queue
// 4) Examples
// 5) Interview

// 1) Call stack
// every js file has a main() function as default > and its first go to call stack
// every function in js is registered in call stack to execute

console.log("starting up.....");

setTimeout(() => {
  console.log("Function 2 sec log");
}, 2000);

setTimeout(() => {
  console.log("function 0 sec log");
}, 0); //even we give 0 sec delay to still it waits to end all call stack functions then it will be eexecuted
//the setTimeout method is registered in node APIs first
//the external liabrary is been stored in node API , the setTimeout is a c++ function thats why it goes in node APIs

// node API detects the time of delay and send the stored functions in "callback queue"
// after callback queue if call stack if empty then callback queue send functions in call Stack

console.log("finishing up.....");
