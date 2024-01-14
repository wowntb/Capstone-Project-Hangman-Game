import React, { Component } from "react";
import DisplayGame from "./DisplayGame";

// This component handles the functioning of the game.
class Hangman extends Component {
  constructor() {
    super();
    /* The state of this component will store a randomly generated word, an array of 
    the user's guessed letters and their number of attempts left. */
    this.state = {
      word: this.generateWord(),
      guessedLetters: [],
      attempts: 10,
    };
  }

  // This method will return a random word from the array of words provided.
  generateWord() {
    const words = ["hyperiondev", "react", "nathenale", "state", "province"];
    return words[Math.floor(Math.random() * words.length)];
  }

  // This method will take the letter of the button clicked on by the user and determine whether it is correct.
  handleGuess = (letter) => {
    // These values from the state of the component will be used.
    const { word, guessedLetters, attempts } = this.state;

    // If the user has 0 attempts then they have lost and the game will be reset. The word is revealed in an alert.
    if (attempts === 0) {
      alert("You lost! The word was: " + word);
      this.resetGame();
      return;
    }

    // If the user guessed a previously guessed letter then they will be prompted to make another guess.
    if (guessedLetters.includes(letter)) {
      alert("You already guessed this letter. Try another one.");
      return;
    }

    // A new array of guessed letters is made. It copies the old one and adds the user's new letter.
    const newGuessedLetters = [...guessedLetters, letter];

    // If the user's letter is not in the word then 1 is subtracted from the state of attempts.
    if (!word.includes(letter)) {
      this.setState({ attempts: attempts - 1 });
    }

    // The new array of guessed letters is saved in state.
    this.setState({ guessedLetters: newGuessedLetters }, () => {
      /* As a callback, if the user guessed all the letters of the word then an alert with a winning message 
      is made and the game is this.resetGame. */
      if (this.isWordGuessed()) {
        alert("Congratulations! The word was " + word);
        this.resetGame();
      }
    });
  };

  // This method returns true or false depending on whether the array of letters has all the letters of the word.
  isWordGuessed() {
    const { word, guessedLetters } = this.state;
    return word.split("").every((letter) => guessedLetters.includes(letter));
  }

  // This method will reset the state of the objects to their default values.
  resetGame() {
    this.setState({
      word: this.generateWord(),
      guessedLetters: [],
      attempts: 10,
    });
  }

  render() {
    // The properties of state are extracted to these variables to be passed to the other component.
    const { word, guessedLetters, attempts } = this.state;

    return (
      <div>
        <h1>Hangman Game</h1>
        {/* The state of the Hangman component is passed to this DisplayGame component as props. */}
        <DisplayGame
          word={word}
          guessedLetters={guessedLetters}
          attempts={attempts}
          onGuess={this.handleGuess}
        />
      </div>
    );
  }
}

export default Hangman;
