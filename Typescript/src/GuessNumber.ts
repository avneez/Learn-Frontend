import * as readline from 'readline';

class GuessingGame {
  private secretNumber: number;
  private attempts: number;
  private rl: readline.Interface;

  constructor() {
    this.secretNumber = Math.floor(Math.random() * 100) + 1;
    this.attempts = 0;
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  }

  public play() {
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
      } else if (parsedGuess < this.secretNumber) {
        console.log('Too low! Try a higher number.\n');
        this.play();
      } else {
        console.log('Too high! Try a lower number.\n');
        this.play();
      }
    });
  }
}

const game = new GuessingGame();
game.play();
