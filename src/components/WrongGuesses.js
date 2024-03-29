import React from "react";

// a function to display the number of wrong guesses remaining and number of guesses made by the user
function WrongGuesses(props) {

  // assign the states to a a props variable
  const remainingGuesses = props.maxWrongGuesses - props.wrongGuesses;

  // return the block displaying the details
  return (
    <div className="wrong-guesses-container">
      <div>
        <p className="wrongGuessRemaining">
          Wrong guesses remaining:<br/>
          <span className="guess-number"> {remainingGuesses}</span>
        </p>
      </div>
    </div>
  );
}

export default WrongGuesses;
