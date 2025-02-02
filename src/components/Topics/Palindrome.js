import React, { Component } from "react";

class Palindrome extends Component {
  render() {
    return (
      <div className="puzzleBox palindromPB">
        <h4> Palindrome</h4>
        <input
          className="inputLine"
          onChange={e => this.handleChange(e.target.value)}
        ></input>
        <button
          className="confirmationButton"
          onClick={() => this.isPalindrome(this.state.userInput)}
        >
          {" "}
          Check{" "}
        </button>
        <span className="resultsBox">
          {" "}
          Palindrome: {this.state.palindrome}{" "}
        </span>
      </div>
    );
  }

  constructor() {
    super();

    this.state = {
      userInput: "",
      palindrome: ""
    };
  }

  handleChange(val) {
    this.setState({ userInput: val });
  }

  isPalindrome(userInput) {
    let forward = userInput;
    let backward = userInput;
    backward = backward.split("");
    backward = backward.reverse();
    backward = backward.join("");

    if (backward === forward) {
      this.setState({ palindrome: "true" });
    } else {
      this.setState({ palindrome: "false" });
    }
  }
}

export default Palindrome;
