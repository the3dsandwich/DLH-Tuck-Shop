import React, { Component } from "react";
import Main from "./components/main";
import Login from "./components/Login";
import { BrowserRouter, Switch, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/console/:id" component={Main} />
          <Route exact path="/" component={Login} />
          <Route path="/:id" component={Main} />
        </Switch>
      </BrowserRouter>
    );
  }
}
