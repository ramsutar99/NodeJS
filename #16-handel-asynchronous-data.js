let a = 10;
let b = 0;

setTimeout(() => {
  b = 20; //here we updated the value of b
}, 2000);

console.log(a + b, "using settimeout"); //we should have receive a 30 as per line 21 of b's value but we received 10
// because this line executed before setTimeout

// so this is a drawback of disadvantage we can see in asynchronous behavior of js

// here is how we can handel this situation :) =============>

let waitingData = new Promise((resolve, reject) => {
  setTimeout(() => {
    b = 30;
    resolve(30);
  }, 2000);
});
waitingData.then((b) => {
  console.log(a + b, "using promise");
});

// when we use promise we only get result when promise got resolved otherwise we get an error
