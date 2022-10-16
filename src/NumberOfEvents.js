import React, { Component } from "react";

export class NumberOfEvents extends Component {
  handelInputChanged = (event) => {
    this.props.updateEvents(undefined, event.target.value);
    const value = event.target.value;
    this.setState({ numOfEvents: value });
  };

  state = { numOfEvents: 16 };
  render() {
    return (
      <div className="numberOfEvents">
        <label>
          <p>Number of Events:</p>
          <input
            type="number"
            className="number-input"
            value={this.state.numOfEvents}
            onChange={this.handelInputChanged}
          />
        </label>
      </div>
    );
  }
}
export default NumberOfEvents;
