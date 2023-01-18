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



// function generateOTP() {
//     var digits = '0123456789';
//     var y = '';
//     for (let i = 0; i < 4; i++ ) {
//     if(((i>0) && y[i-1]===y[i])){  //1356
//         continue;
//     }
//     else
//         y += digits[Math.floor(Math.random() * 10)];
//     }
//     // console.log(y);
//     return y;
// }

const generateOTP = () => {
    var numbers = [0,1,2,3,4,5,6,7,8,9];
    for (var i = numbers.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = numbers[i];
      numbers[i] = numbers[j];
      numbers[j] = temp;
    }
    // console.log(numbers);
    return numbers.slice(0,4).join('')
  }

function guessNumber() {
    var z=generateOTP();
    console.log("Computer-> "+z);

    const prompt=require("prompt-sync")({sigint:true});
    var x= prompt("Enter the number ")

    let ans="";
    for(let i=0; i<4; i++){
        if(x[i]==z[i]){
            ans+='+';
        }
        else if(x.includes(z[i])){
            ans+='-';
        }
    }
    console.log(ans)
}
guessNumber();
