"use strict";
exports.__esModule = true;
var readline = require("readline");
var GuessingGame = /** @class */ (function () {
    function GuessingGame() {
        this.secretNumber = Math.floor(Math.random() * 100) + 1;
        this.attempts = 0;
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }
    GuessingGame.prototype.play = function () {
        var _this = this;
        this.rl.question('Guess a number: ', function (guess) {
            var parsedGuess = parseInt(guess, 10);
            if (isNaN(parsedGuess)) {
                console.log('Invalid input. Please enter a valid number.\n');
                _this.play();
                return;
            }
            _this.attempts++;
            if (parsedGuess === _this.secretNumber) {
                console.log("Congratulations! You guessed the number in ".concat(_this.attempts, " attempts."));
                _this.rl.close();
            }
            else if (parsedGuess < _this.secretNumber) {
                console.log('Too low! Try a higher number.\n');
                _this.play();
            }
            else {
                console.log('Too high! Try a lower number.\n');
                _this.play();
            }
        });
    };
    return GuessingGame;
}());
var game = new GuessingGame();
game.play();
