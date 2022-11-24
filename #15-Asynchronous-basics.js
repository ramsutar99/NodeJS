// Asynchronous Basics

// advantages
// runs fast , never waits to complete another task

console.log("start");

setTimeout(() => {
  console.log("logic execution");
}, 2000);

console.log("end");

// disadvantages of asynchronous behavior
//

let a = 10;
let b = 0;

setTimeout(() => {
  b = 20; //here we updated the value of b
}, 2000);

console.log(a + b); //we should have receive a 30 as per line 21 of b's value but we received 10
// because this line executed before setTimeout

// so this is a drawback of disadvantage we can see in asynchronous behavior of js
