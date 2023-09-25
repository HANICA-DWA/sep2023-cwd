import React from "react";

import AuthenticationAPI from "../api/AuthenticationAPI";

export class Login extends React.Component {
  state = {
    username: "",
    password: "",
    loginBusy: false,
    loginFailure: false
  };

  handleSubmit = event => {
    const { username, password } = this.state;

    event.preventDefault();
    this.setState({ loginBusy: true });

    AuthenticationAPI.login(username, password, () => {
      const isLoggedIn = AuthenticationAPI.isLoggedIn;

      this.setState({
        loginBusy: false,
        loginFailure: !isLoggedIn
      });
      if (isLoggedIn) {
        //TODO: here we need to redirect to the homepage
      }
    });
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
      loginFailure: false
    });
  };

  render() {
    const { username, password, loginBusy, loginFailure } = this.state;
    const { handleSubmit, handleChange } = this;

    return (
      <div className="page">
        <p className="info">
          Hint: use the same values for username and password to login
        </p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            name="username"
            id="henk"
            type="text"
            size="15"
            disabled={loginBusy}
            value={username}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            size="15"
            disabled={loginBusy}
            value={password}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="login"></label>
          <button disabled={loginBusy}>Login</button>
        </form>

        {loginBusy && <p className="info">Trying to login... </p>}

        {loginFailure && <p className="info">Invalid username and password </p>}
      </div>
    );
  }
}
