import React from "react";

import frontPageItems from "../frontpageData";

export class RrHNApp extends React.Component {
  state = {
    items: frontPageItems,
  };

  render() {
    return (
      <div className="App">
        <p>Welcome to RRHN</p>
        <p>There are {this.state.items.length} HN items.</p>
      </div>
    );
  }
}
