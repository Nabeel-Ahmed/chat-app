import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./../Layout/";
import SignIn from "./../Pages/SignIn";
import fourofour from "../Pages/404";

export default function index() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Layout} />
          <Route exact path="/SignIn" component={SignIn} />
          <Route component={fourofour} />
        </Switch>
      </Router>
    </div>
  );
}
