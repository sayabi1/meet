import React, { Component } from "react";
class Event extends Component {
  toggleEventDetails = () => {
    this.setState({ show: !this.state.show });
  };
  state = { show: false };
  render() {
    const { event } = this.props;
    return (
      <div className="event">
        <h1 className="event-summary-titel">{event.summary}</h1>
        <p className="event-info">
          {event.start.dateTime} {event.start.timeZone} {event.location}
        </p>
        {this.state.show && (
          <>
            <h2 className="event-about-titel">About Event</h2>
            <p className="event__Details">{event.description}</p>
            <a
              href={event.htmlLink}
              target="blank"
              rel=""
              noreferrer
              className="event-htmlLink"
            >
              See details on Google Calendar
            </a>
          </>
        )}
        {!this.state.show ? (
          <button className="details-btn" onClick={this.toggleEventDetails}>
            Show details
          </button>
        ) : (
          <button className="details-btn" onClick={this.toggleEventDetails}>
            Hide Details
          </button>
        )}
      </div>
    );
  }
}
export default Event;
