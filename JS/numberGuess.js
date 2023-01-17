// Also, try to solve following problem:
// 1. Guess the number of Program:

// The computer will generate a four-digit number without duplicate digits.
// The user will enter a four-digit number and display generated number & the user's entered number is the same or not.
// Show guess count in UI
// The computer will return an answer at every guess
// 1. If a digit exists in the computer number in the same location, the computer will return “+”
// 2. If a digit exists but not in the same location, the computer will return “-”
// eg : 
// Suppose the computer generates "1234"
// User enter 1673
// Computer will display "+-"
// The "+" is for the digit “1”
// the "-" is for the digit 3
// Let me know if you need any clarity on this problem

var y = Math.floor(1000 + Math.random() * 9000);

var guess = 1;

function guessNumber() {
    const prompt=require("prompt-sync")({sigint:true});
    var x= prompt("Enter the number ")

    let mp = {}

    console.log(mp)

    //if (x == y) {
    //     console.log("Your guess is right "+ guess);
    // }
    // else if (x > y) {
    //     guess++;
    //     console.log("your guess is wrong, try a smaller number");
    // }
    // else {
    //     guess++;
    //     ("your guess is wrong , try a greater number")
    // }
}
guessNumber();
