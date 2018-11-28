import React, { Component } from "react";
import Main from "./components/main";
import Login from "./components/Login";
import { BrowserRouter, Switch, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/:id" component={Main} />
          <Route exact path="/" component={Login} />
        </Switch>
      </BrowserRouter>
    );
  }
}
