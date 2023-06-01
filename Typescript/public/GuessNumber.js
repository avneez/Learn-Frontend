"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
class GuessingGame {
    constructor() {
        this.secretNumber = Math.floor(Math.random() * 100) + 1;
        this.attempts = 0;
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }
    play() {
        this.rl.question('Guess a number: ', (guess) => {
            const parsedGuess = parseInt(guess, 10);
            if (isNaN(parsedGuess)) {
                console.log('Invalid input. Please enter a valid number.\n');
                this.play();
                return;
            }
            this.attempts++;
            if (parsedGuess === this.secretNumber) {
                console.log(`Congratulations! You guessed the number in ${this.attempts} attempts.`);
                this.rl.close();
            }
            else if (parsedGuess < this.secretNumber) {
                console.log('Too low! Try a higher number.\n');
                this.play();
            }
            else {
                console.log('Too high! Try a lower number.\n');
                this.play();
            }
        });
    }
}
const game = new GuessingGame();
game.play();
