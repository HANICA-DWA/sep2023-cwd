import React from "react";

import { NavBar } from "./NavBar";
import { Home } from "./Home";
import { About } from "./About";
import { NotFound } from "./NotFound";
import { Login } from "./Login";
import { Logout } from "./Logout";
import { Delays } from "./Delays";
import { AddDelay } from "./AddDelay";

class App extends React.Component {
  state = { currentPage: "home" };

  handlePageChange = newPage => {
    this.setState({ currentPage: newPage });
  };

  renderCurrentPage = () => {
    let result;

    switch (this.state.currentPage) {
      case "home":
        result = <Home />;
        break;
      case "about":
        result = <About />;
        break;
      case "delays":
        result = <Delays />;
        break;
      case "adddelay":
        result = <AddDelay />;
        break;
      case "login":
        result = <Login />;
        break;
      case "logout":
        result = <Logout />;
        break;
      default:
        result = <NotFound />;
        break;
    }

    return result;
  };

  render() {
    return (
      <div className="app">
        <NavBar onPageChange={this.handlePageChange} />
        {this.renderCurrentPage()}
      </div>
    );
  }
}

export default App;
