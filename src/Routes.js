import React from "react";
import { Router, Route } from "react-router-dom";
import Home from "./components/home";
import Activity from "./components/activity";
import history from "./history.js";

export default () => {
  return (
    <Router history={history}>
      <Route exact path="/" component={Home} />
      <Route exact path="/activity" component={Activity} />
    </Router>
  );
};
