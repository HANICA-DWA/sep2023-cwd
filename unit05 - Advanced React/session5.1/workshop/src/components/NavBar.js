import React from "react";

export class NavBar extends React.Component {
  handleClick = event => {
    event.preventDefault();
    this.props.onPageChange(event.target.name);
  };

  render() {
    return (
      <nav>
        <a name="home" onClick={this.handleClick}>Home</a>
        <a name="about" onClick={this.handleClick}>About</a>
        <a name="delays" onClick={this.handleClick}>Delays</a>
        <a name="adddelay" onClick={this.handleClick}>Add delay</a>
        <a name="login" onClick={this.handleClick}>Login</a>
        <a name="logout" onClick={this.handleClick}>Logout</a>
      </nav>
    );
  }
}
