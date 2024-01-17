import React, { Component } from "react";

// This Help component will provide instructions to the user on how the Hangman game is played if needed.
class Help extends Component {
  // I am using state because I want the instructions to be animated when clicked on.
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
  }

  // Whenever the h2 "Help" is clicked on the boolean of the state isOpen is toggled.
  toggleAccordion = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    const { isOpen } = this.state;

    return (
      // The toggling of the state object will result in a change of this className which will animate it.
      <div className={`container ${isOpen ? "open" : ""}`}>
        <h2 onClick={this.toggleAccordion}>Help</h2>
        <div className="content">
          <p>
            This is a simple game of hangman. You must deduce what the word is
            by guessing letters and seeing if that letter is part of the word.
            You will have 10 attempts to get the word right before the man is
            hung. The progression of the image represents the user's failed
            attempts.
          </p>
        </div>
      </div>
    );
  }
}

export default Help;
