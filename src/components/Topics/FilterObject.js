import React, { Component } from "react";

class FilterObjects extends Component {
  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4> Filter Object</h4>
        <span className="puzzleText">
          {" "}
          Original: {JSON.stringify(this.state.garage, null, 10)}
        </span>
        <input
          className="inputLine"
          onChange={e => this.handleChange(e.target.value)}
        ></input>
        <button
          className="confirmationButton"
          onClick={() => this.filterGarage(this.state.userInput)}
        >
          {" "}
          Filter
        </button>
        <span className="resultsBox filterObjectRB">
          {" "}
          Filtered: {JSON.stringify(this.state.filteredGarage, null, 10)}
        </span>
      </div>
    );
  }

  constructor() {
    super();
    this.state = {
      garage: [
        {
          make: "Ferrari",
          model: "enzo",
          year: 2005
        },
        {
          make: "BMW",
          model: "m3",
          value: 75000
        },
        {
          make: "lamborghini",
          model: "diablo",
          color: "green"
        }
      ],
      userInput: "",
      filteredGarage: []
    };
  }

  handleChange(val) {
    this.setState({ userInput: val });
  }

  filterGarage(prop) {
    let garage = this.state.garage;
    let filteredGarage = [];

    for (let i = 0; i < garage.length; i++) {
      if (garage[i].hasOwnProperty(prop)) {
        filteredGarage.push(garage[i]);
      }
    }

    this.setState({ filteredGarage: filteredGarage });
  }
}

export default FilterObjects;
