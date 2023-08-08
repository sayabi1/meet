import React, { Component } from "react";
import { ErrorAlert } from "./Alert";

export class NumberOfEvents extends Component {
  state = {
    numOfEvents: 16,
    errorText: "",
  };
  handelInputChanged = (event) => {
    const value = event.target.value;
    if (value < 1 || value > 16) {
      this.setState({
        numOfEvents: value,
        errorText: "Enter number between 1 to 16",
      });
    } else {
      this.setState({
        numOfEvents: event.target.value,
        errorText: "",
      });
    }
    this.props.updateEvents(undefined, event.target.value);
  };

  render() {
    return (
      <div>
        <div className="numberOfEvents">
          <label>
            <p>Number of Events:</p>
            <input
              type="number"
              className="number-input"
              min="1"
              value={this.state.numOfEvents}
              onChange={this.handelInputChanged}
            />
          </label>
        </div>
        <div>
          <ErrorAlert text={this.state.errorText} />
        </div>
      </div>
    );
  }
}
export default NumberOfEvents;
