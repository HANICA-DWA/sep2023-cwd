import React from "react";
import ReactDOM from "react-dom";

import "./main.css"; // Using Webpack, we usually import CSS from JavaScript, not from HTML.
// This is not standard JavaScript, it's a Webpack feature
// that is popular in the React community.

import { RrHNApp } from "./components/App";

const mainComponent = <RrHNApp />;
ReactDOM.render(mainComponent, document.getElementById("root"));
