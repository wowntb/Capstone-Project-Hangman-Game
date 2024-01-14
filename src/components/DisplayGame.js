import React, { Component } from "react";
// All these images will represent the user's failed attempts.
import state1 from "../hangman-drawings/state1.GIF";
import state2 from "../hangman-drawings/state2.GIF";
import state3 from "../hangman-drawings/state3.GIF";
import state4 from "../hangman-drawings/state4.GIF";
import state5 from "../hangman-drawings/state5.GIF";
import state6 from "../hangman-drawings/state6.GIF";
import state7 from "../hangman-drawings/state7.GIF";
import state8 from "../hangman-drawings/state8.GIF";
import state9 from "../hangman-drawings/state9.GIF";
import state10 from "../hangman-drawings/state10.GIF";
import state11 from "../hangman-drawings/state11.GIF";

// This component is used to display the game on the browser.
class DisplayGame extends Component {
  render() {
    const { word, guessedLetters, attempts, onGuess } = this.props;

    // This draw method will display a hangman drawing representing the user's remaining attempts.
    const draw = (attempts) => {
      switch (attempts) {
        case 9:
          return <img src={state2} alt="hangman drawing" />;
        case 8:
          return <img src={state3} alt="hangman drawing" />;
        case 7:
          return <img src={state4} alt="hangman drawing" />;
        case 6:
          return <img src={state5} alt="hangman drawing" />;
        case 5:
          return <img src={state6} alt="hangman drawing" />;
        case 4:
          return <img src={state7} alt="hangman drawing" />;
        case 3:
          return <img src={state8} alt="hangman drawing" />;
        case 2:
          return <img src={state9} alt="hangman drawing" />;
        case 1:
          return <img src={state10} alt="hangman drawing" />;
        case 0:
          return <img src={state11} alt="hangman drawing" />;

        default:
          return <img src={state1} alt="hangman drawing" />;
      }
    };

    return (
      <div className="hangman-game">
        <p>
          <b>Attempts left: </b>
          {attempts}
        </p>

        <p>
          <b>Guessed letters: </b>
          {/* This displays the letters the user has guessed if they have started. It will display "None" at the start.*/}
          {guessedLetters.length > 0 ? guessedLetters.join(", ") : "None"}
        </p>

        <div className="word">
          {/* This portion of code displays the randomly generated word but with its letters replaced with underscores. */}
          {word.split("").map((letter, index) => (
            <span key={index}>
              {guessedLetters.includes(letter) ? letter : "_ "}
            </span>
          ))}
        </div>

        <div className="keyboard">
          {/* First an array of characters of length 26 is made starting from character code 97 to store the alphabet. */}
          {Array.from({ length: 26 }, (_, i) =>
            String.fromCharCode(97 + i)
          ).map(
            // The array is then mapped to display a row of buttons displaying the letters of the alphabet.
            (letter) => (
              <button key={letter} onClick={() => onGuess(letter)}>
                {letter}
              </button>
            )
          )}
        </div>

        {/* This div here calls the draw method which will display the state of the hangman (the user's failed attempts). */}
        <div className="drawing">{draw(attempts)}</div>
      </div>
    );
  }
}

export default DisplayGame;
