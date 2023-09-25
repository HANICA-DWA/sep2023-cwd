import React from "react";

import DataAPI from "../api/DataAPI";

export class AddDelay extends React.Component {
  static initialState = {
    date: "",
    from: "",
    to: "",
    minutes: "",
    isDirty: false
  };

  state = { ...AddDelay.initialState };

  handleSubmit = event => {
    event.preventDefault();

    const { date, from, to, minutes } = this.state;
    DataAPI.addDelay(date, from, to, parseInt(minutes, 10));
    this.setState({ ...AddDelay.initialState });
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
      isDirty: true
    });
  };

  render() {
    const { date, from, to, minutes, isDirty } = this.state;
    const { handleSubmit, handleChange } = this;

    return (
      <div className="page">
        {/* TODO: Here we need to alert the user when he/she leaves the page while 
          something has changed. */}
        <form onSubmit={handleSubmit}>
          <label htmlFor="date">Date</label>
          <input
            name="date"
            id="date"
            type="date"
            size="25"
            value={date}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="from">From</label>
          <input
            name="from"
            id="from"
            type="text"
            size="25"
            placeholder="Origin..."
            value={from}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="to">To</label>
          <input
            name="to"
            id="to"
            type="text"
            size="25"
            value={to}
            placeholder="Destination..."
            onChange={handleChange}
          />
          <br />
          <label htmlFor="minutes">Minutes</label>
          <input
            name="minutes"
            id="minutes"
            type="number"
            size="25"
            value={minutes}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="addDelay"></label>
          <button id="addDelay" disabled={!isDirty}>Add delay</button>
          <br/>
        </form>
        <p className="info">{isDirty ? "Something" : "Nothing"} has changed</p>
      </div>
    );
  }
}
