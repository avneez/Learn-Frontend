//events, eventLoop, eventBubbling


let v,t;
v=5, t=5
const seconds = v*t;
// console.log(seconds)

setTimeout(() => {
  console.log("Ran after 500 ms");
}, 500)

while (true) {
  if (seconds>=30) {
    console.log("Good");
    break;
  }
  else console.log("Try again")
}
