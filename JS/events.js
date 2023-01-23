//events, eventLoop, eventBubbling


// let v,t;
// v=5, t=5
// const seconds = v*t;
// // console.log(seconds)

// setTimeout(() => {
//   console.log("Ran after 500 ms");
// }, 500)

// while (true) {
//   if (seconds>=30) {
//     console.log("Good");
//     break;
//   }
//   else console.log("Try again")
// }


(() => {

  console.log('this is the start');

  setTimeout(() => {
    console.log('Callback 1: this is a msg from call back');
  }); // has a default time value of 0

  console.log('this is just a message');

  setTimeout(() => {
    console.log('Callback 2: this is a msg from call back');
  }, 0);

  console.log('this is the end');

})();

// "this is the start"
// "this is just a message"
// "this is the end"
// "Callback 1: this is a msg from call back"
// "Callback 2: this is a msg from call back"
