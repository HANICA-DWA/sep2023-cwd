import React from "react";

import AuthenticationAPI from "../api/AuthenticationAPI";

export const Logout = () => {
  AuthenticationAPI.logout();
  //TODO: here we need to redirect to the homepage
  return <p>Logged out</p>;
};
